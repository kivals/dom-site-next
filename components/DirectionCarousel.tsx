"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ContainerStyles } from "@/types/types";
import DirectionsItem from "@/components/DirectionsItem";
import { clsx } from "clsx";

interface DirectionCarouselProps extends ContainerStyles {}

const DirectionCarousel = ({ containerStyles }: DirectionCarouselProps) => {
  return (
    <div className={clsx(containerStyles)}>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-[149px] rounded-full sm:basis-[280px] md:basis-[340px]"
            >
              <DirectionsItem />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default DirectionCarousel;
