"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import AboutItem from "@/components/about/AboutItem";
import { IAboutItem } from "@/types/types";

interface AboutImagesDesktopProps {
  content: IAboutItem[];
}

const AboutImagesDesktop = ({ content }: AboutImagesDesktopProps) => {
  const imageRef = useRef(null);
  const [activeTextId, setActiveTextId] = useState(content[0].id);

  const getImageSrc = (): string => {
    return (
      content.find((c) => c.id === activeTextId)?.image || content[0].image
    );
  };

  return (
    <div className="flex gap-6 overflow-visible">
      {/*left*/}
      <div className="sticky top-6 flex h-[90vh] w-1/2 items-center">
        <Image
          className="max-h-[500px] object-contain"
          src={getImageSrc()}
          ref={imageRef}
          width="500"
          height="500"
          alt=""
        />
      </div>
      {/*right*/}
      <div className="w-1/2">
        {content.map((c) => (
          <AboutItem
            key={c.id}
            content={c}
            onChange={(id) => {
              setActiveTextId(id);
            }}
            viewOptions={{
              threshold: 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutImagesDesktop;
