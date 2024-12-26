import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CategoriesCarousel = () => {
  return (
    <>
      <div className="relative w-full max-w-full mt-[5rem]">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-[93.5%] mx-auto px-4 md:px-6"
        >
          <CarouselContent>
            {/* First Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 cursor-pointer hover:scale-95 hover:duration-300">
              <div className="p-1">
                <Card className="bg-[#f3f3f3] relative">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="absolute top-0 text-[100px] font-semibold text-[#fefefa] flex items-center justify-center">
                      MEN
                    </span>
                    <Image
                      src="/man.png"
                      alt="man"
                      height={2000}
                      width={2000}
                      className="absolute top-0 z-50 max-w-full max-h-full object-contain"
                    />

                    <span className="z-[100] absolute bottom-4 w-[90%] bg-white font-semibold text-center p-[10px] rounded-full text-[20px]">
                      Men's Clothing
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            {/* Second Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 cursor-pointer hover:scale-95 hover:duration-300">
              <div className="p-1">
                <Card className="bg-[#f3f3f3] relative">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="absolute top-0 text-[100px] font-semibold text-[#fefefa] flex items-center justify-center">
                      WOMEN
                    </span>
                    <Image
                      src="/woman-pink.png"
                      alt="woman"
                      height={1500}
                      width={1500}
                      className="absolute top-0 z-50 max-w-full max-h-full object-contain"
                    />

                    <span className="z-[100] absolute bottom-4 w-[90%] bg-white font-semibold text-center p-[10px] rounded-full text-[20px]">
                      Women's Clothing
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            {/* Third Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 cursor-pointer hover:scale-95 hover:duration-300">
              <div className="p-1">
                <Card className="bg-[#f3f3f3] relative">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="absolute top-0 text-[100px] font-semibold text-[#fefefa] flex items-center justify-center">
                      KIDS
                    </span>
                    <Image
                      src="/kid.png"
                      alt="kids"
                      height={1500}
                      width={1500}
                      className="absolute top-0 z-50 max-w-full max-h-full object-contain"
                    />

                    <span className="z-[100] absolute bottom-4 w-[90%] bg-white font-semibold text-center p-[10px] rounded-full text-[20px]">
                      Babies & Kids
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            {/* Fourth Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 cursor-pointer hover:scale-95 hover:duration-300">
              <div className="p-1">
                <Card className="bg-[#f3f3f3] relative">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="absolute top-0 text-[100px] font-semibold text-[#fefefa] flex items-center justify-center">
                      SHOES
                    </span>
                    <Image
                      src="/shoes.png"
                      alt="shoes"
                      height={300}
                      width={300}
                      className="absolute top-[8rem] z-50 max-w-full max-h-full object-contain"
                    />

                    <span className="z-[100] absolute bottom-4 w-[90%] bg-white font-semibold text-center p-[10px] rounded-full text-[20px]">
                      Shoes
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            {/* Fifth Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 cursor-pointer hover:scale-95 hover:duration-300">
              <div className="p-1">
                <Card className="bg-[#f3f3f3] relative">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="absolute top-0 text-[100px] font-semibold text-[#fefefa] flex items-center justify-center">
                      BEAUTY
                    </span>
                    <Image
                      src="/beauty-products.png"
                      alt="beauty"
                      height={300}
                      width={300}
                      className="absolute top-[8rem] z-50 max-w-full max-h-full object-contain"
                    />

                    <span className="z-[100] absolute bottom-4 w-[90%] bg-white font-semibold text-center p-[10px] rounded-full text-[20px]">
                      Beauty & Health
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default CategoriesCarousel;
