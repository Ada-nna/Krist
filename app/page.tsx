import React from "react";
import Hero from "@/components/homepage/Hero";
import Deals from "@/components/homepage/Deals";
import Review from "@/components/homepage/Review";
import Bestseller from "@/components/homepage/Bestseller";
import OutfitCategories from "@/components/homepage/OutfitCategories";
import InstagramStories from "@/components/homepage/InstagramStories";
import CategoriesCarousel from "@/components/homepage/CategoriesCarousel";

const page = () => {
  return (
    <div className="w-full bg-[#f3f3f3] flex flex-col">
      <div className="container px-4 md:px-6 flex-1">
        <Hero />
        {/* <OutfitCategories /> */}
        <CategoriesCarousel />
        <Bestseller />
        <Deals />
        <Review />
        <InstagramStories />
      </div>
    </div>
  );
};

export default page;
