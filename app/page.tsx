import React from "react";
import Hero from "@/components/homepage/Hero";
// import CategoriesCarousel from "@/components/homepage/CategoriesCarousel";
import OutfitCategories from "@/components/homepage/OutfitCategories";

const page = () => {
  return (
    <div className="h-[calc(100dvh-68px)] w-full bg-[#f3f3f3]">
      <div className="container px-4 md:px-6">
        <Hero />
        {/* <CategoriesCarousel /> */}
        <OutfitCategories />
      </div>
    </div>
  );
};

export default page;
