import React from "react";
import { cn } from "@/lib/utils";
import { VideosCarousel } from "@/components/landing/VideosCarousel";

interface Props {
  className?: string;
}

const Videos: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-12", className)}>
      <div className="container">
        <div className="flex">
          <VideosCarousel />
        </div>
      </div>
    </section>
  );
};

export { Videos };
