import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VideosCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <h2 className="mb-6 text-2xl font-bold uppercase md:text-4xl">
          МЫ в деле
        </h2>
        <div className="flex gap-6">
          <CarouselPrevious
            className="delay-50 static h-12 w-12 transition hover:scale-90"
            variant="link"
            icon="/icons/arrow-right.svg"
          />
          <CarouselNext
            className="delay-50 static h-12 w-12 transition hover:scale-90"
            variant="link"
            icon="/icons/arrow-right.svg"
          />
        </div>
      </div>
      <div className="video-carousel-container">
        <CarouselContent className="gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-[280px] rounded-full md:basis-[380px] lg:basis-[460px]"
            >
              <iframe
                className="md:h-[240px] md:w-[380px] lg:h-[280px] lg:w-[460px]"
                src="https://vk.com/video_ext.php?oid=-18567129&id=456239544"
                width="280"
                height="190"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                allowFullScreen
              ></iframe>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export { VideosCarousel };
