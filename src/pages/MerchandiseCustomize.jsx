import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { FaPen } from "react-icons/fa";
import SizeChartModal from "@/components/merchandise/SizeChartModal";
import SleeveCustomizationModal from "@/components/merchandise/SleeveCustomizationModal";
import {
  merchandiseOrderTypes,
  coupleChoices,
  merchandiseSleeveCustomization,
} from "@/data/merchandise";
import { useCart } from "@/context/CartContext";
import {
  createCatalogProducts,
  findMerchandiseProduct,
  getMerchandiseProduct,
  getPriceAmount,
  parseItemIds,
} from "@/utils/merchandise";
import { getProducts } from "@/services/productService";

const MerchandiseCustomize = () => {
  const { productSlug } = useParams();
  const [searchParams] = useSearchParams();
  const baseProduct = findMerchandiseProduct(productSlug);
  const [catalogProducts, setCatalogProducts] = useState({});
  const navigate = useNavigate();
  const { addItem, beginOrder, items, updateItem } = useCart();
  const cartItemId = searchParams.get("cartItem");
  const editingItem = items.find((item) => item.id === cartItemId);
  const itemIds = parseItemIds(searchParams.get("itemIds"));
  const databaseItemId =
    editingItem?.product?.databaseItemId || Number(itemIds[baseProduct?.id]);
  const catalogProduct = baseProduct ? catalogProducts[baseProduct.id] : null;
  const product = (catalogProduct || baseProduct)
    ? {
        ...(catalogProduct || baseProduct),
        databaseItemId: databaseItemId || null,
      }
    : null;
  const isEditing = Boolean(editingItem);
  const selectedOrderType = merchandiseOrderTypes.find(
    (order) => order.id === searchParams.get("order"),
  );
  const coupleChoice = coupleChoices.find(
    (choice) => choice.id === searchParams.get("choice"),
  );
  const bundleId = searchParams.get("bundle");
  const isSecondCoupleProduct = searchParams.get("step") === "2";
  const previousCoupleItem = isSecondCoupleProduct
    ? items.find((item) => item.bundleId === bundleId)
    : null;
  // A Couple package always has two customization steps; each step represents one shirt.
  const fixedQuantity = 1;
  const isFirstCoupleProduct =
    selectedOrderType?.id === "couple" &&
    !searchParams.get("bundle") &&
    !isEditing;
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [sleeveCustomization, setSleeveCustomization] = useState(
    editingItem?.sleeveCustomization ||
      merchandiseSleeveCustomization.defaultValue,
  );
  const [formData, setFormData] = useState({
    quantity: editingItem?.quantity || fixedQuantity,
    size:
      editingItem?.size || searchParams.get("size") || product?.sizes[0] || "S",
  });

  useEffect(() => {
    let isCurrent = true;

    getProducts()
      .then((items) => {
        if (isCurrent) setCatalogProducts(createCatalogProducts(items));
      })
      .catch(() => {
        // The static catalogue remains available if the API cannot be reached.
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  const productImages = (product?.imageUrls?.length
    ? product.imageUrls
    : [product?.image]
  ).filter(Boolean);
  const productImageLabels = ["front", "back", "left side", "right side"];
  const selectedImage = productImages[selectedImageIndex] || productImages[0];

  if (!product)
    return (
      <main className="mx-auto w-full max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold text-black">Product not found</h1>
        <Link
          to="/merchandise"
          className="mt-4 inline-block font-semibold text-[#ff8a24]"
        >
          Back to merchandise
        </Link>
      </main>
    );

  const updateField = (event) =>
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  const handleSubmit = (event) => {
    event.preventDefault();
    const orderType = selectedOrderType;
    const price =
      coupleChoice?.price ||
      orderType?.items.find((item) => item.merchandiseId === product.id)
        ?.price ||
      "$0.00";
    const fixedPrice = getPriceAmount(price);
    const orderLine = {
      product,
      quantity: Number(formData.quantity),
      size: formData.size,
      sleeveCustomization,
      orderType: orderType?.id || "standard",
      bundleId: editingItem?.bundleId || bundleId,
      // Editing must retain the original package price. Recalculating from the
      // product alone turns both shirts in a Couple bundle into paid bundles.
      price: isEditing ? editingItem.price : price,
      // The selected package has one fixed price; a second Couple step only
      // customizes the other shirt and must not add another charge.
      fixedPrice: isEditing
        ? editingItem.fixedPrice
        : orderType?.id === "couple" && bundleId
          ? 0
          : fixedPrice,
    };
    if (isEditing) {
      updateItem(cartItemId, orderLine);
      navigate(searchParams.get("returnTo") || "/my-orders");
      return;
    }
    if (orderType?.id === "couple") {
      const currentBundleId =
        bundleId || `couple-${product.slug}-${formData.size}`;
      if (bundleId) {
        addItem({ ...orderLine, bundleId: currentBundleId });
      } else {
        beginOrder({ ...orderLine, bundleId: currentBundleId });
      }
      if (!bundleId) {
        const nextProduct = getMerchandiseProduct(
          coupleChoice?.productIds[1] || "tshirt",
        );
        const itemIdsQuery = searchParams.get("itemIds");
        navigate(
          `/merchandise/${nextProduct.slug}/customize?order=couple&choice=${coupleChoice?.id || "polo-tshirt"}&bundle=${currentBundleId}&step=2&size=${nextProduct.sizes[0]}${itemIdsQuery ? `&itemIds=${encodeURIComponent(itemIdsQuery)}` : ""}`,
        );
      } else {
        navigate("/my-orders");
      }
      return;
    }
    beginOrder(orderLine);
    setIsSaved(true);
    navigate("/my-orders");
  };
  const leftSleeveText =
    sleeveCustomization.left.option === "name"
      ? sleeveCustomization.left.text || "None"
      : "None";
  const rightSleeveText =
    merchandiseSleeveCustomization.rightOptions.find(
      (option) => option.value === sleeveCustomization.right,
    )?.label || "None";

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <Link to="/merchandise" className="hover:text-black">
          Merchandise
        </Link>
        <span className="px-2">/</span>
        {isSecondCoupleProduct && previousCoupleItem ? (
          <>
            <Link
              to={`/merchandise/${previousCoupleItem.product.slug}/customize?size=${previousCoupleItem.size}&order=couple&choice=${coupleChoice?.id || "polo-tshirt"}&bundle=${bundleId}&cartItem=${previousCoupleItem.id}&returnTo=${encodeURIComponent(`/merchandise/${product.slug}/customize?size=${formData.size}&order=couple&choice=${coupleChoice?.id || "polo-tshirt"}&bundle=${bundleId}&step=2`)}`}
              className="hover:text-black"
            >
              Product 1
            </Link>
            <span className="px-2">/</span>
            <span>Product 2</span>
          </>
        ) : (
          <span>Product 1</span>
        )}
      </nav>
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
        <section>
          <div className="h-120 rounded-2xl bg-brand-secondary-orange p-6 sm:p-10">
            <img
              src={selectedImage}
              alt={product.name}
              className="mx-auto h-full w-full object-contain"
            />
          </div>
          {productImages.length > 1 && (
            <div className="mt-4 flex gap-3">
              {productImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`h-20 w-14 overflow-hidden rounded-lg border-2 bg-brand-secondary-orange ${selectedImageIndex === index ? "border-[#ff8a24]" : "border-transparent"}`}
                  aria-label={`Show ${productImageLabels[index] || `view ${index + 1}`} image`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </section>
        <section>
          <h1 className="max-w-xl text-3xl font-bold leading-tight text-black sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-5 border-t border-gray-200 pt-5">
            <h2 className="font-bold text-black">Description</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {product.description}
            </p>
          </div>
          <form className="mt-7 space-y-6" onSubmit={handleSubmit}>
            <label className="block text-sm font-bold text-black">
              Quantity
              <input
                name="quantity"
                type="number"
                min={fixedQuantity}
                value={formData.quantity}
                readOnly
                aria-readonly="true"
                className="mt-2 block w-full cursor-not-allowed rounded-lg border border-gray-300 bg-slate-50 px-3 py-2 font-normal text-gray-800"
              />
            </label>
            <fieldset>
              <div className="flex items-center gap-4">
                <legend className="text-sm font-bold text-black">Size</legend>
                <button
                  type="button"
                  onClick={() => setIsSizeChartOpen(true)}
                  className="cursor-pointer text-sm text-black underline underline-offset-2"
                >
                  Size chart
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <label
                    key={size}
                    className={`flex h-10 min-w-11 cursor-pointer items-center justify-center rounded-lg border px-3 text-sm font-bold transition ${formData.size === size ? "border-[#142f55] bg-[#142f55] text-white" : "border-gray-200 text-black hover:border-[#142f55]"}`}
                  >
                    <input
                      className="sr-only"
                      type="radio"
                      name="size"
                      value={size}
                      checked={formData.size === size}
                      onChange={updateField}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="border-t border-gray-200 pt-5">
              <legend className="font-bold text-black">Customization</legend>
              <dl className="mt-3 flex flex-col gap-3 text-sm ">
                <div>
                  <dt className="font-semibold text-gray-700">Left Sleeve</dt>
                  <dd className="mt-1 text-gray-500">{leftSleeveText}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Right Sleeve</dt>
                  <dd className="mt-1 text-gray-500">{rightSleeveText}</dd>
                </div>
              </dl>
            </fieldset>
            <button
              type="button"
              onClick={() => setIsCustomizerOpen(true)}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-[#142f55] px-5 py-3 font-bold text-brand-primary transition hover:bg-slate-50"
            >
              <FaPen aria-hidden="true" /> Customize Shirt
            </button>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-[#142f55] px-5 py-3 font-bold text-white transition hover:bg-[#0d2340]"
            >
              {isEditing
                ? "Update Order"
                : isFirstCoupleProduct
                  ? "Next"
                  : "Add to Order"}
            </button>
            {isSaved && (
              <p className="text-sm font-medium text-black" role="status">
                Customization saved. Ready for order integration.
              </p>
            )}
          </form>
        </section>
      </div>
      <SizeChartModal
        isOpen={isSizeChartOpen}
        onClose={() => setIsSizeChartOpen(false)}
      />
      {isCustomizerOpen && (
        <SleeveCustomizationModal
          initialValue={sleeveCustomization}
          onClose={() => setIsCustomizerOpen(false)}
          onSave={(value) => {
            setSleeveCustomization(value);
            setIsCustomizerOpen(false);
          }}
        />
      )}
    </main>
  );
};

export default MerchandiseCustomize;
