import { clsx } from "clsx";
import { motion } from "framer-motion";
import { IVideoConfig } from "@/types/types";

interface IHeroMenuItemProps {
  video: IVideoConfig;
  isActive: boolean;
  onClick: () => void;
}

const HeroMenuItem = ({
  video,
  isActive = false,
  onClick,
}: IHeroMenuItemProps) => {
  return (
    <motion.div
      animate={{ x: isActive ? 25 : 0 }} // Сдвиг вправо на 100 пикселей при клике
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      key={video.name}
      className={clsx(
        isActive ? "opacity-100" : "opacity-70",
        "inline-block cursor-pointer hover:opacity-100",
      )}
    >
      <span className="mb-2 text-xl font-bold uppercase text-white transition-all sm:mb-2 sm:text-2xl lg:mb-3 lg:text-4xl">
        {video.name}
      </span>
      {isActive && (
        <motion.div
          className="h-0.5 rounded-s bg-white"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: video.duration / 1000, ease: "linear" }}
        />
      )}
    </motion.div>
  );
};

export default HeroMenuItem;
