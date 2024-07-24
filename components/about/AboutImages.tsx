"use client";

import useIsMobile from "@/hooks/UseIsMobile";
import AboutImagesMobile from "@/components/about/AboutImagesMobile";
import AboutImagesDesktop from "@/components/about/AboutImagesDesktop";
import { IAboutItem } from "@/types/types";

const AboutImages = ({ content }: { content: IAboutItem[] }) => {
  const { isMobile } = useIsMobile(768);

  return (
    <div className="flex flex-col gap-6">
      {isMobile ? (
        <AboutImagesMobile content={content} />
      ) : (
        <AboutImagesDesktop content={content} />
      )}
    </div>
  );
};

export default AboutImages;
