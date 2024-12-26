import React from "react";
import ReviewCarousel from "./ReviewCarousel";

const Review = () => {
  return (
    <div className="mt-[5rem]">
      <h1 className="text-center font-medium md:text-[24px]">
        What Our Customers Say...
      </h1>

      <div className="mt-[2rem]">
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default Review;
