import React from "react";
import Image from "next/image";
import { IAboutItem } from "@/types/types";

interface IAboutImagesMobileProps {
  content: IAboutItem[];
}

const AboutImagesMobile = ({ content }: IAboutImagesMobileProps) => {
  return (
    <>
      {content.map((c) => (
        <div
          key={c.id}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            className="max-h-[300px] object-contain"
            src={c.image}
            width="300"
            height="300"
            alt=""
          />
          <h3 className="text-xl font-bold uppercase md:text-2xl">{c.title}</h3>
          <p className="text-sm leading-5">{c.description}</p>
        </div>
      ))}
    </>
  );
};

export default AboutImagesMobile;
