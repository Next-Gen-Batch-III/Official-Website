import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { merchandiseSleeveCustomization } from "@/data/merchandise";

const sleeveLabel = (item) => {
  const left =
    item.sleeveCustomization.left.option === "name"
      ? item.sleeveCustomization.left.text || "None"
      : "None";
  const right =
    merchandiseSleeveCustomization.rightOptions.find(
      (option) => option.value === item.sleeveCustomization.right,
    )?.label || "None";
  return { left, right };
};

const currency = (amount) => `$${amount.toFixed(2)}`;

const MyOrders = () => {
  const { items } = useCart();
  const subtotal = items.reduce(
    (total, item) => total + item.fixedPrice,
    0,
  );

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 lg:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <Link to="/merchandise" className="hover:text-[#142f55]">
          Merchandise
        </Link>
        <span className="px-2">/</span>
        <span>Product 1</span>
        {items.some((item) => item.orderType === "couple") && (
          <>
            <span className="px-2">/</span>
            <span>Product 2</span>
          </>
        )}
        <span className="px-2">/</span>
        <span>My Order</span>
      </nav>
      <h1 className="mt-6 text-2xl font-bold text-[#142f55]">My Order</h1>
      {items.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-gray-300 p-10 text-center">
          <p className="text-gray-600">Your order is currently empty.</p>
          <Link
            to="/merchandise"
            className="mt-5 inline-block rounded-lg bg-[#142f55] px-5 py-3 font-bold text-white"
          >
            Browse merchandise
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-4">
            {items.map((item) => {
              const sleeves = sleeveLabel(item);
              return (
                <article
                  key={item.id}
                  className="grid items-center gap-5 rounded-2xl bg-white p-5 shadow-[0_3px_12px_rgba(15,23,42,0.12)] sm:grid-cols-[120px_1fr_auto]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-32 w-full object-contain"
                  />
                  <div className="text-sm text-gray-700">
                    <h2 className="font-bold text-[#142f55]">
                      {item.product.name}
                    </h2>
                    <p className="mt-3">
                      <strong>Size:</strong> {item.size}
                    </p>
                    <p className="mt-2">
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <p className="mt-2">
                      <strong>Set price:</strong> {item.price}
                    </p>
                    <div className="mt-3">
                      <strong>Customized:</strong>
                      <p className="ml-6 mt-1">
                        <strong>Left Sleeve:</strong> {sleeves.left}
                      </p>
                      <p className="ml-6 mt-1">
                        <strong>Right Sleeve:</strong> {sleeves.right}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-self-end">
                    <Link
                      to={`/merchandise/${item.product.slug}/customize?size=${item.size}&order=${item.orderType}&cartItem=${item.id}`}
                      aria-label={`Edit ${item.product.name}`}
                      className="rounded-full p-3 text-[#142f55] transition hover:bg-slate-100"
                    >
                      <FaPen />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <section className="mt-6 border-y border-gray-300 py-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <strong>Price</strong>
              <span>{currency(subtotal)}</span>
            </div>
            <div className="mt-4 flex justify-between">
              <strong>Subtotal</strong>
              <span>{currency(subtotal)}</span>
            </div>
          </section>
          <Link
            to="/payment"
            className="mt-6 block w-full cursor-pointer rounded-lg bg-[#142f55] px-5 py-3 text-center font-bold text-white transition hover:bg-[#0d2340]"
          >
            Continue To Payment
          </Link>
        </>
      )}
    </main>
  );
};

export default MyOrders;
