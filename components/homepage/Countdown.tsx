"use client";
import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2024-12-31T23:59:59").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex items-center gap-[3rem]">
        <div className="flex flex-col items-center">
          <p className="text-[50px] font-semibold">{timeLeft.days}</p>
          <p className="text-[18px] font-medium">Days</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[50px] font-semibold">{timeLeft.hours}</p>
          <p className="text-[18px] font-medium">Hours</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[50px] font-semibold">{timeLeft.minutes}</p>
          <p className="text-[18px] font-medium">Mins</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[50px] font-semibold">{timeLeft.seconds}</p>
          <p className="text-[18px] font-medium">Secs</p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
