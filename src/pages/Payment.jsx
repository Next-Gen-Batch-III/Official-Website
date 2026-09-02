import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useCart } from "@/context/CartContext";
import standardPolo from "@/assets/merchandise/price/NGEP-Standard-PoloShirtt.webp";
import standardTshirt from "@/assets/merchandise/price/NGEP-Standard-TShirt.webp";
import couplePolo from "@/assets/merchandise/price/NGEP-Couple-2PoloShirts.webp";
import coupleTshirt from "@/assets/merchandise/price/NGEP-Couple-2TShirts.webp";
import coupleMixed from "@/assets/merchandise/price/NGEP-Couple-1PoloShirtn1TShirt.webp";

const qrForOrder = (item) => {
  if (item?.orderType === "standard")
    return item.product.id === "polo" ? standardPolo : standardTshirt;
  if (item?.price === "$13.96") return couplePolo;
  if (item?.price === "$7.96") return coupleTshirt;
  return coupleMixed;
};

const Payment = () => {
  const { items, checkoutDetails, setCheckoutDetails } = useCart();
  const navigate = useNavigate();
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [form, setForm] = useState(checkoutDetails || {
    fullName: "",
    phoneNumber: "",
    telegramUsername: "",
    email: "",
    pickupLocation: "",
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
      <div className="mt-4">
        <Button variant="brand" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
      <h1 className="mt-6 text-2xl font-bold text-[#142f55]">
        Customer Information
      </h1>
      <form
        className="mt-6"
        onSubmit={(event) => {
          event.preventDefault();

          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!emailRegex.test(form.email)) {
            alert("Please enter a valid email address.");
            return;
          }

          // Telegram username validation
          const telegramRegex = /^@[a-zA-Z0-9_]{5,32}$/;  

          if (!telegramRegex.test(form.telegramUsername)) {
            alert("Please enter a valid Telegram username starting with @.");
            return;
          }

          setCheckoutDetails(form);
          setIsQrOpen(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["fullName", "Full Name", "text", "John Stone"],
            ["phoneNumber", "Phone Number", "tel", "0123456767"],
            ["telegramUsername", "Telegram Username", "text", "@yourusername"],
            ["email", "Email Address", "email", "yourname@gmail.com or yourname@student.cadt.edu.kh"],
          ].map(([name, label, type, placeholder]) => (
            <label key={name} className="text-sm text-gray-700">
              {label}
              <input
                required
                name={name}
                type={type}
                value={form[name]}
                placeholder={placeholder}
                onChange={update}
                className="mt-2 block w-full rounded border border-gray-300 px-4 py-3"
              />
            </label>
          ))}
        </div>
        <label className="mt-5 block text-sm text-gray-700">
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
        <button
          type="submit"
          className="mt-8 w-full cursor-pointer rounded bg-[#142f55] py-3 font-bold text-white"
        >
          Pay now ${total.toFixed(2)}
        </button>
      </form>
      <Modal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        contentClassName="w-full max-w-2xl rounded-3xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold">Total Amount</h2>
        <p className="mt-2 text-4xl font-bold text-green-500">
          ${total.toFixed(2)}
        </p>
        <div className="my-8 border-t" />
        <h3 className="text-2xl font-bold">Scan QR code to pay</h3>
        <img
          src={qrForOrder(items[0])}
          alt="Payment QR code"
          className="mx-auto mt-6 h-72 w-72 object-contain"
        />
        <p className="mt-5 text-left text-gray-700">
          1. Open your banking app
          <br />
          2. Scan the QR code above
          <br />
          3. Check amount
          <br />
          4. Complete payment
          <br />
          5. Continue to upload your payment proof
        </p>
        <button
          type="button"
          onClick={() => navigate("/payment/proof")}
          className="mt-8 w-full cursor-pointer rounded-lg bg-[#142f55] py-4 text-xl font-bold text-white"
        >
          Continue
        </button>
      </Modal>
    </main>
  );
};
export default Payment;
