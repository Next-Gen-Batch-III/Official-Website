import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "@/components/ui/Modal";

const ProductCard = ({ product, onChooseSize }) => (
  <article className="group/product overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]">
    <div className="h-70 bg-neutral-200">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-contain p-4"
      />
    </div>
    <div className="p-5">
      <h3 className="font-bold text-[#142f55]">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-500">Customized</p>
      <p className="mt-2 text-lg font-bold text-gray-800">{product.price}</p>
      <div
        className="mt-4 flex max-h-16 justify-center gap-2 overflow-hidden bg-white py-1 transition-all duration-200 md:mt-0 md:max-h-0 md:py-0 md:group-hover/product:mt-4 md:group-hover/product:max-h-16 md:group-hover/product:py-1 md:group-focus-within/product:mt-4 md:group-focus-within/product:max-h-16 md:group-focus-within/product:py-1"
      >
        {product.sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onChooseSize(product, size)}
            className="h-10 w-10 cursor-pointer rounded-full border border-gray-200 bg-white text-sm font-bold text-[#142f55] transition hover:border-[#142f55] hover:bg-slate-50"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  </article>
);

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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="mt-1 text-3xl font-bold text-[#142f55]">
            Our Options
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#142f55] transition hover:bg-slate-100"
          aria-label="Close order options"
        >
          <FaTimes />
        </button>
      </div>
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
