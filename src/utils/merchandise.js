import { merchandiseItems } from "@/data/merchandise";

export const findMerchandiseProduct = (slug) =>
  Object.values(merchandiseItems).find((product) => product.slug === slug);

export const getMerchandiseProduct = (id) => merchandiseItems[id];

export const parseItemIds = (value) => {
  try {
    return JSON.parse(value || "{}");
  } catch {
    return {};
  }
};

export const getPriceAmount = (price = "") =>
  Number.parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;

const productKeyFromName = (name = "") => {
  const normalizedName = name.toLowerCase();
  if (normalizedName.includes("polo")) return "polo";
  if (normalizedName.includes("t-shirt") || normalizedName.includes("t shirt")) {
    return "tshirt";
  }
  return null;
};

export const createCatalogProducts = (apiItems) =>
  Object.fromEntries(
    apiItems
      .map((item) => {
        const productKey = productKeyFromName(item.name);
        const product = merchandiseItems[productKey];
        if (!product) return null;

        return [
          productKey,
          {
            ...product,
            databaseItemId: item.id,
            name: item.name,
            description: item.description,
            imageUrls: item.imageUrls?.length ? item.imageUrls : product.imageUrls ?? [],
            image: item.imageUrls?.[0] || product.image,
            sizes: item.availableSizes,
          },
        ];
      })
      .filter(Boolean),
  );

export const getProductItemIds = (products) =>
  Object.fromEntries(
    Object.entries(products).map(([key, product]) => [key, product.databaseItemId]),
  );
