import React from "react";
import ReviewCard from "../ReviewCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewCarousel = () => {
  return (
    <div className="mt-[2rem]">
      <div className="relative w-full max-w-full mt-[2rem]">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-[93.5%] mx-auto p-4 md:px-6"
        >
          <CarouselContent>
            {/* First Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-[#fafafb]">
                <div className="pt-4 md:pt-6">
                  <CardContent>
                    <ReviewCard
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi cumque facere illo delectus fugit excepturi, non dignissimos accusantium quaerat libero officiis. Ducimus!"
                      name="John Doe"
                      role="Facility Manager"
                      image="/headshot-man.jpg"
                    />
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>

            {/* Second Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-[#fafafb]">
                <div className="pt-4 md:pt-6">
                  <CardContent>
                    <ReviewCard
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi cumque facere illo delectus fugit excepturi, non dignissimos accusantium quaerat libero officiis. Ducimus!"
                      name="Olabisi Onitemi"
                      role="Sales Representative"
                      image="/headshot-female.jpg"
                    />
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>

            {/* Third Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-[#fafafb]">
                <div className="pt-4 md:pt-6">
                  <CardContent>
                    <ReviewCard
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi cumque facere illo delectus fugit excepturi, non dignissimos accusantium quaerat libero officiis. Ducimus!"
                      name="John Doe"
                      role="Facility Manager"
                      image="/headshot-man.jpg"
                    />
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>

            {/* Fourth Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-[#fafafb]">
                <div className="pt-4 md:pt-6">
                  <CardContent>
                    <ReviewCard
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi cumque facere illo delectus fugit excepturi, non dignissimos accusantium quaerat libero officiis. Ducimus!"
                      name="John Doe"
                      role="Facility Manager"
                      image="/headshot-man.jpg"
                    />
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>

            {/* Fifth Card */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-[#fafafb]">
                <div className="pt-4 md:pt-6">
                  <CardContent>
                    <ReviewCard
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi cumque facere illo delectus fugit excepturi, non dignissimos accusantium quaerat libero officiis. Ducimus!"
                      name="Olabisi Onitemi"
                      role="Sales Representative"
                      image="/headshot-female.jpg"
                    />
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewCarousel;
