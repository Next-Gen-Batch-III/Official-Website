import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Payment = () => {
  const { items, checkoutDetails, setCheckoutDetails } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(checkoutDetails || {
    fullName: "",
    phoneNumber: "",
    telegramUsername: "",
    email: "",
    deliveryMethod: "pickup",
    pickupLocation: "",
    deliveryAddress: "",
  });
  const total = items.reduce((sum, item) => sum + item.fixedPrice, 0);
  const productHref = (item) =>
    `/merchandise/${item.product.slug}/customize?size=${item.size}&order=${item.orderType}&cartItem=${item.id}`;
  const update = (event) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 lg:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <Link to="/merchandise" className="hover:text-[#142f55]">
          Merchandise
        </Link>
        {items[0] && (
          <>
            <span className="px-2">/</span>
            <Link to={productHref(items[0])} className="hover:text-[#142f55]">
              Product 1
            </Link>
          </>
        )}
        {items[1] && (
          <>
            <span className="px-2">/</span>
            <Link to={productHref(items[1])} className="hover:text-[#142f55]">
              Product 2
            </Link>
          </>
        )}
        <span className="px-2">/</span>
        <Link to="/my-orders" className="hover:text-[#142f55]">
          My Order
        </Link>
        <span className="px-2">/</span>
        <span>Payment</span>
      </nav>
      <h1 className="mt-6 text-2xl font-bold text-[#142f55]">
        Customer Information
      </h1>
      <form
        className="mt-6"
        onSubmit={(event) => {
          event.preventDefault();
          setCheckoutDetails(form);
          navigate("/payment/proof");
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["fullName", "Full Name", "text"],
            ["phoneNumber", "Phone Number", "tel"],
            ["telegramUsername", "Telegram Username", "text"],
            ["email", "Email Address", "email"],
          ].map(([name, label, type]) => (
            <label key={name} className="text-sm text-gray-700">
              {label}
              <input
                required
                name={name}
                type={type}
                value={form[name]}
                onChange={update}
                className="mt-2 block w-full rounded border border-gray-300 px-4 py-3"
              />
            </label>
          ))}
        </div>
        <p className="mt-5 text-sm text-gray-700">Delivery Methods</p>
        <div className="mt-3 grid gap-6 sm:grid-cols-2">
          {["pickup", "delivery"].map((method) => (
            <button
              key={method}
              type="button"
              onClick={() =>
                setForm((current) => ({ ...current, deliveryMethod: method }))
              }
              className={`cursor-pointer rounded border-2 py-3 font-bold capitalize ${form.deliveryMethod === method ? "border-[#142f55] bg-[#142f55] text-white" : "border-[#142f55] text-[#142f55]"}`}
            >
              {method}
            </button>
          ))}
        </div>
        {form.deliveryMethod === "pickup" ? (
          <label className="mt-3 block text-sm text-gray-700">
            Pickup location
            <select
              required
              name="pickupLocation"
              value={form.pickupLocation}
              onChange={update}
              className="mt-2 block w-full rounded border border-gray-300 bg-white px-4 py-3"
            >
              <option value="" disabled>
                Select pickup location
              </option>
              <option value="event-day">Event Day</option>
              <option value="staff-office">Staff Office</option>
            </select>
          </label>
        ) : (
          <label className="mt-3 block text-sm text-gray-700">
            Delivery address
            <textarea
              required
              name="deliveryAddress"
              value={form.deliveryAddress}
              onChange={update}
              rows="3"
              className="mt-2 block w-full resize-y rounded border border-gray-300 px-4 py-3"
            />
          </label>
        )}
        <button
          type="submit"
          className="mt-8 w-full cursor-pointer rounded bg-[#142f55] py-3 font-bold text-white"
        >
          Pay now ${total.toFixed(2)}
        </button>
      </form>
    </main>
  );
};
export default Payment;
