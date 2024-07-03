import HeroMenuItem from "@/components/ui/Hero/HeroMenuItem";
import { videos } from "@/components/landing/Hero";
import { ContainerStyles, IVideoConfig } from "@/types/types";

import { clsx } from "clsx";

interface IHeroVideoNavProps extends ContainerStyles {
  activeVideo: IVideoConfig;
  onClick: (video: IVideoConfig) => void;
}

const HeroVideoNav = ({
  activeVideo,
  onClick,
  containerStyles,
}: IHeroVideoNavProps) => {
  return (
    <nav className={clsx(containerStyles, "flex items-center justify-end")}>
      <ul>
        {videos.map((video) => (
          <li key={video.name}>
            <HeroMenuItem
              video={video}
              onClick={() => onClick(video)}
              isActive={activeVideo.name === video.name}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeroVideoNav;
