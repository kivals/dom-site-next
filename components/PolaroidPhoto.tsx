"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  image: string;
  text?: string;
  rotateDegree?: number;
}

const PolaroidPhoto: React.FC<Props> = ({
  className,
  image,
  text,
  rotateDegree = 0,
}) => {
  return (
    <motion.div
      className={cn(
        className,
        "relative h-[388px] w-[320px] md:h-[521px] md:w-[430px] lg:h-[583px] lg:w-[480px]",
      )}
      whileTap={{ rotate: 0 }}
      whileHover={{ rotate: 0 }}
      transition={{ duration: 0.4 }}
      animate={{
        rotate: rotateDegree,
      }}
    >
      <div className="w-full px-3 pt-3">
        <Image className="w-full" src={image} width="300" height="300" alt="" />
      </div>
      <div className="absolute top-0 h-full w-full bg-polaroid bg-contain bg-no-repeat"></div>
      <h4 className="absolute bottom-5 w-full text-center text-xl font-bold text-background">
        {text}
      </h4>
    </motion.div>
  );
};

export { PolaroidPhoto };
