import { FaPlus } from "react-icons/fa";

const OrderTypeCard = ({ order, onOrder }) => {
  const Icon = order.icon;

  return (
    <article
      className={`group overflow-hidden rounded-2xl border bg-white p-4 transition-all duration-300 ${
        "border-gray-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:-translate-y-1"
      }`}
    >
      {/* Image/Icon area */}
      <div className="flex h-44 items-center justify-center rounded-lg bg-[#ff8a24] sm:h-75">
        <Icon
          className="text-[110px] text-[#142f55] sm:text-[250px]"
          aria-hidden="true"
        />
      </div>

      {/* Card content */}
      <div className="relative min-h-[140px] pt-5">
        <div className="pr-14">
          <h3 className="text-lg font-bold text-gray-800">{order.title}</h3>

          <p className="mt-1 text-sm text-gray-400">{order.subtitle}</p>

          <div className="mt-1 space-y-0.5">
            {order.items.map((item) => (
              <p
                key={`${order.id}-${item.label}`}
                className="text-sm font-semibold text-gray-700"
              >
                {item.label}: {item.price}
              </p>
            ))}
          </div>
        </div>

        {/* Expanding order button */}
        <button
          type="button"
          onClick={() => onOrder(order)}
          aria-label={`Order ${order.title}`}
          className="absolute right-0 top-5 h-10 w-10 cursor-pointer overflow-hidden rounded-full bg-black text-white shadow-md transition-all duration-500 ease-out hover:bg-[#142f55] group-hover:w-36 group-focus-within:w-36 focus-visible:w-36 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142f55]"
        >
          {/* Order text */}
          <span
            className="absolute inset-y-0 right-4 flex translate-x-3 items-center whitespace-nowrap text-sm font-bold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-150 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-focus-within:delay-150 focus-within:translate-x-0 focus-within:opacity-100"
          >
            Order Now
          </span>

          {/* The icon slides left as the action expands. */}
          <span
            className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center transition-[right] duration-500 ease-out group-hover:right-[104px] group-focus-within:right-[104px] focus-within:right-[104px]"
          >
            <FaPlus className="text-sm" />
          </span>
        </button>
      </div>
    </article>
  );
};

export default OrderTypeCard;
