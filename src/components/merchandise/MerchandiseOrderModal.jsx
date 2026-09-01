import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "@/components/ui/Modal";

const ProductCard = ({ product, onChooseSize }) => {
  const defaultSize = product.sizes[0];
  const images = product.imageUrls?.length ? product.imageUrls : [product.image];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const selectedImage = images[selectedIndex] || images[0];

  const handleSelect = () => {
    setHasInteracted(true);
    if (defaultSize) onChooseSize(product, defaultSize);
  };

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]">
      <div
        role="button"
        tabIndex={defaultSize ? 0 : -1}
        onClick={handleSelect}
        onKeyDown={(event) => {
          if (defaultSize && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            handleSelect();
          }
        }}
        aria-label={`Customize ${product.name}`}
        aria-disabled={!defaultSize}
        className={`block w-full cursor-pointer text-left ${!defaultSize ? "pointer-events-none opacity-60" : ""}`}
      >
        <span className="flex h-70 w-full items-center justify-center bg-neutral-200">
          <img
            src={selectedImage}
            alt={product.name}
            className="h-full w-full object-contain p-4"
          />
        </span>
        <span className="block p-5">
          <h3 className="font-bold text-[#142f55]">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">Customized</p>
          <p className="mt-2 text-lg font-bold text-gray-800">{product.price}</p>
        </span>
      </div>
      {hasInteracted && images.length > 1 && (
        <div className="flex flex-wrap gap-2 px-5 pb-5">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex(index);
              }}
              className={`h-12 w-9 overflow-hidden rounded-md border-2 bg-neutral-100 ${selectedIndex === index ? "border-[#ff8a24]" : "border-transparent"}`}
              aria-label={`Show image ${index + 1} of ${product.name}`}
            >
              <img src={image} alt="" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      )}
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
