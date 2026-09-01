import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "@/components/ui/Modal";

const ProductCard = ({ product, onChooseSize }) => {
  const defaultSize = product.sizes[0];
  const images = product.imageUrls?.length ? product.imageUrls : [product.image];
  const comboImageSets = product.comboImageSets?.length ? product.comboImageSets : null;
  const comboProductIndexes = product.comboProductIndexes?.length === 2
    ? product.comboProductIndexes
    : [0, 1];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [comboIndexes, setComboIndexes] = useState(() =>
    comboImageSets ? comboImageSets.map(() => 0) : [],
  );
  const [hasInteracted, setHasInteracted] = useState(false);
  const selectedImage = images[selectedIndex] || images[0];
  const comboImages = comboImageSets
    ? comboProductIndexes.map((setIndex) => {
        const set = comboImageSets[setIndex];
        return set?.[comboIndexes[setIndex]] || set?.[0];
      })
    : null;
  const sideLabels = ["front", "back", "left side", "right side"];

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
        {comboImages ? (
          <span className="relative flex h-70 w-full items-center justify-center overflow-hidden bg-neutral-200">
            <img
              src={comboImages[0]}
              alt=""
              aria-hidden="true"
              className="absolute left-[8%] top-[12%] h-[65%] w-[55%] -translate-x-2 rotate-[-8deg] object-contain drop-shadow-md"
            />
            <img
              src={comboImages[1]}
              alt={product.name}
              className="absolute bottom-[10%] right-[6%] h-[70%] w-[58%] translate-x-2 rotate-6 object-contain drop-shadow-xl"
            />
          </span>
        ) : (
          <span className="flex h-70 w-full items-center justify-center bg-neutral-200">
            <img
              src={selectedImage}
              alt={product.name}
              className="h-full w-full object-contain p-4"
            />
          </span>
        )}
        <span className="block p-5">
          <h3 className="font-bold text-[#142f55]">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">Customized</p>
          <p className="mt-2 text-lg font-bold text-gray-800">{product.price}</p>
        </span>
      </div>
      {comboImageSets && (
        <div className="flex flex-wrap gap-2 px-5 pb-5">
          {comboImageSets.map((set, setIndex) =>
            set.map((image, sideIndex) => (
              <button
                key={`${setIndex}-${image}`}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setComboIndexes((current) => {
                    const next = [...current];
                    next[setIndex] = sideIndex;
                    return next;
                  });
                }}
                className={`h-12 w-9 overflow-hidden rounded-md border-2 bg-neutral-100 ${comboIndexes[setIndex] === sideIndex ? "border-[#ff8a24]" : "border-transparent"}`}
                aria-label={`Show ${comboImageSets.length > 1 ? `item ${setIndex + 1} ` : ""}${sideLabels[sideIndex] || sideIndex + 1}`}
              >
                <img src={image} alt="" className="h-full w-full object-contain" />
              </button>
            )),
          )}
        </div>
      )}
      {!comboImageSets && hasInteracted && images.length > 1 && (
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
