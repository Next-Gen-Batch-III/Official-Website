import { X, CalendarClock } from "lucide-react";
import Button from "../ui/Button";

export default function RegisterPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">
      {/* Card */}
      <div className="relative w-full max-w-[505px] rounded-[16px] bg-white px-6 py-10 shadow-xl sm:px-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-gray-500 transition hover:text-gray-800"
        >
          <X size={25} strokeWidth={2} />
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-[82px] w-[82px] items-center justify-center">
            <CalendarClock
              size={76}
              strokeWidth={1.8}
              className="text-[#159ED9]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-5 text-center">
          <h2 className="text-[28px] font-bold leading-tight text-[#172F55]">
            Coming Soon!
          </h2>

          <p className="mt-2 text-[14px] leading-[19px] text-gray-500">
            Event registration will be available soon.
            <br />
            Please stay tuned
          </p>
        </div>

        {/* Button */}
        <div className="mt-9 flex justify-end">
          <Button
            onClick={onClose}
            variant="primary"
            shadowColor="#666666"

          >
            OKAY
          </Button>
        </div>
      </div>
    </div>
  );
}
