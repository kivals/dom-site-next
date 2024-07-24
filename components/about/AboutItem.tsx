"use client";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { IAboutItem } from "@/types/types";

interface AboutItemProps {
  content: Omit<IAboutItem, "image">;
  onChange: (id: string) => void;
  viewOptions: IntersectionOptions;
}

const AboutItem = ({ onChange, content, viewOptions }: AboutItemProps) => {
  const { ref } = useInView({
    ...viewOptions,
    onChange: (inView) => {
      if (inView) {
        onChange(content.id);
      }
    },
  });

  return (
    <div
      ref={ref}
      className="flex h-[90vh] items-center py-20"
    >
      <div className="flex flex-col">
        <h3 className="text-xl font-bold uppercase md:text-2xl">
          {content.title}
        </h3>
        <p className="text-sm leading-5">{content.description}</p>
      </div>
    </div>
  );
};

export default AboutItem;
