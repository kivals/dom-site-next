"use client";

import { useState } from "react";
import Video from "@/components/ui/Video";
import HeroVideoNav from "@/components/ui/Hero/HeroVideoNav";
import { IVideoConfig } from "@/types/types";

export const videos: IVideoConfig[] = [
  { name: "high heels", path: "/hero/video/dance1.mp4", duration: 7000 },
  { name: "hip-hop", path: "/hero/video/dance2.mp4", duration: 7000 },
  { name: "dancehall", path: "/hero/video/dance3.mp4", duration: 8000 },
];

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const endVideoHandler = () => {
    const index = videos.findIndex((v) => v.name === activeVideo.name);
    videos[index + 1]
      ? setActiveVideo(videos[index + 1])
      : setActiveVideo(videos[0]);
  };

  return (
    <section className="container mx-auto mb-4">
      <div className="relative">
        <Video
          path={activeVideo.path}
          shadow
          onEnded={endVideoHandler}
          containerStyles="w-full md:w-[90%]"
        />
        <HeroVideoNav
          activeVideo={activeVideo}
          onClick={setActiveVideo}
          containerStyles="absolute bottom-0 left-0 right-0 top-0 mr-4 "
        />
      </div>
    </section>
  );
};

export default Hero;
