import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const CountdownCard = () => {
  // Change this to your actual event date
  const targetDate = new Date("2026-09-25T12:00:00+07:00").getTime();

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-[15px] shadow-lg p-5 w-full max-w-[720px]">
      
      <div className="flex flex-col content-left">
        <p className="flex items-center justify-left ml-6 gap-2 text-xs md:text-xl font-semibold text-[#12284C] mb-3">
          <Calendar className="w-8 h-8 text-[#F88D2A] " />
          COUNTDOWN TO NEXT-GEN EVENT
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center py-5">

        <div>
          <div className="text-5xl font-bold text-[#F88D2A]">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <span className="text-l font-semibold text-[#12284C]">
            DAYS
          </span>
        </div>

        <div>
          <div className="text-5xl font-semibold text-[#F88D2A]">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <span className="text-l font-bold text-[#12284C]">
            HOURS
          </span>
        </div>

        <div>
          <div className="text-5xl font-semibold text-[#F88D2A]">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <span className="text-l font-bold text-[#12284C]">
            MINUTES
          </span>
        </div>

        <div>
          <div className="text-5xl font-semibold text-[#F88D2A]">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <span className="text-l font-bold text-[#12284C]">
            SECONDS
          </span>
        </div>

      </div>

    </div>
  );
};

export default CountdownCard;