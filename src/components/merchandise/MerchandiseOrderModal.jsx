import { useNavigate } from "react-router-dom";
import Modal from "@/components/ui/Modal";

const ProductCard = ({ product, onChooseSize }) => {
  const defaultSize = product.sizes[0];

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]">
    <button
      type="button"
      onClick={() => onChooseSize(product, defaultSize)}
      disabled={!defaultSize}
      className="block h-70 w-full cursor-pointer bg-neutral-200 disabled:cursor-not-allowed"
      aria-label={`Customize ${product.name}`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-contain p-4"
      />
    </button>
    <div className="p-5">
      <h3 className="font-bold text-[#142f55]">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-500">Customized</p>
      <p className="mt-2 text-lg font-bold text-gray-800">{product.price}</p>
    </div>
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
