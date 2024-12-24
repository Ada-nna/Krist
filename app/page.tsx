import React from "react";
import Hero from "@/components/homepage/Hero";
import Bestseller from "@/components/homepage/Bestseller";
import OutfitCategories from "@/components/homepage/OutfitCategories";
import CategoriesCarousel from "@/components/homepage/CategoriesCarousel";

const page = () => {
  return (
    <div className="h-[calc(100dvh-68px)] w-full bg-[#f3f3f3]">
      <div className="container px-4 md:px-6">
        <Hero />
        {/* <OutfitCategories /> */}
        <CategoriesCarousel />
        <Bestseller />
      </div>
    </div>
  );
};

export default page;
