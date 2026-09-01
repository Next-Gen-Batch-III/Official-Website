import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "@/components/ui/Modal";

const ProductCard = ({ product, onChooseSize }) => {
  const defaultSize = product.sizes[0];
  const images = product.imageUrls?.length ? product.imageUrls : [product.image];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showSides, setShowSides] = useState(false);
  const selectedImage = images[selectedIndex] || images[0];

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]">
      <button
        type="button"
        onClick={() => images.length > 1 && setShowSides((current) => !current)}
        aria-label={
          images.length > 1 ? `Show sides of ${product.name}` : product.name
        }
        aria-expanded={images.length > 1 ? showSides : undefined}
        className={`flex h-70 w-full items-center justify-center bg-neutral-200 ${images.length > 1 ? "cursor-pointer" : "cursor-default"}`}
      >
        <img
          src={selectedImage}
          alt={product.name}
          className="h-full w-full object-contain p-4"
        />
      </button>
      {showSides && images.length > 1 && (
        <div className="flex flex-wrap gap-2 px-5 pt-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`h-12 w-9 overflow-hidden rounded-md border-2 bg-neutral-100 ${selectedIndex === index ? "border-[#ff8a24]" : "border-transparent"}`}
              aria-label={`Show image ${index + 1} of ${product.name}`}
            >
              <img src={image} alt="" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => defaultSize && onChooseSize(product, defaultSize)}
        disabled={!defaultSize}
        aria-label={`Customize ${product.name}`}
        className="block w-full cursor-pointer p-5 text-left disabled:cursor-not-allowed"
      >
        <h3 className="font-bold text-[#142f55]">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">Customized</p>
        <p className="mt-2 text-lg font-bold text-gray-800">{product.price}</p>
      </button>
    </article>
  );
};

const MerchandiseOrderModal = ({
  order,
  products,
  onClose,
  bundleId,
  productItemIds,
}) => {
  const navigate = useNavigate();

  const handleChooseSize = (product, size) => {
    const searchParams = new URLSearchParams({ size, order: order.id });
    if (bundleId) searchParams.set("bundle", bundleId);
    if (product.choiceId) searchParams.set("choice", product.choiceId);
    if (Object.keys(productItemIds).length) {
      searchParams.set("itemIds", JSON.stringify(productItemIds));
    }
    navigate(`/merchandise/${product.slug}/customize?${searchParams}`);
  };

  return (
    <Modal
      isOpen={Boolean(order)}
      onClose={onClose}
      contentClassName="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl p-6 sm:p-10"
    >
      <h2 className="mt-1 pr-10 text-3xl font-bold text-[#142f55]">
        Our Options
      </h2>
      <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}  
            product={product}
            onChooseSize={handleChooseSize}
          />
        ))}
      </div>
    </Modal>
  );
};

export default MerchandiseOrderModal;
