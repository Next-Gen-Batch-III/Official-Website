import { FaCheckCircle, FaTelegramPlane, FaUserPlus } from "react-icons/fa";
import Modal from "@/components/ui/Modal";

const benefits = [
  "Easier coordination",
  "Special support",
  "Fast processing",
];

const GroupOrderModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    contentClassName="w-full max-w-4xl rounded-[1.75rem] px-6 py-10 sm:px-11 sm:py-12"
  >
    <section className="mx-auto max-w-2xl text-center">
      <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[#142f55] text-white">
        <FaUserPlus aria-hidden="true" className="text-6xl" />
      </div>
      <h2 className="mt-6 text-3xl font-bold text-black">Group Order</h2>
      <p className="mt-2 text-xl text-gray-600">
        Enjoy bundle ordering with our team
      </p>

      <ul className="mx-auto mt-10 max-w-md space-y-6 text-left text-xl text-[#142f55]">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-4">
            <FaCheckCircle
              aria-hidden="true"
              className="text-2xl text-[#22c55e]"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://t.me/lchvn"
        target="_blank"
        rel="noreferrer"
        className="mt-9 flex w-full items-center justify-center gap-4 rounded-xl bg-[#142f55] px-5 py-5 text-2xl font-bold text-white transition hover:bg-[#0d2340]"
      >
        <FaTelegramPlane aria-hidden="true" className="text-4xl" />
        Order via Telegram
      </a>
    </section>
  </Modal>
);

export default GroupOrderModal;
