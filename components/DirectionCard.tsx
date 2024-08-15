import React, { useRef } from "react";
import {
  motion,
  useAnimationControls,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
//import { FiMousePointer } from "react-icons/fi";

const textAnimateVariant = {
  scale: 1.3,
  originX: 0,
  color: "#fe112",
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const DirectionCard = () => {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = async (e: React.MouseEvent) => {
    await controls.start("scale");

    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative rounded-xl bg-neutral-900 h-[230px] w-[230px] md:h-[380px] md:w-[380px]"
    >
      <div
        style={{
          transform: "translateZ(25px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid place-content-center overflow-hidden rounded-xl bg-neutral-800 shadow-lg sm:inset-2 md:inset-2"
      >
        <Image
          className="rounded-xl object-fill sm:w-[180px] md:w-[280px] mb-3"
          src="/about/second.png"
          alt=""
          width={149}
          height={149}
          priority
        />
        <motion.h4
          whileHover="scale"
          className="text-xl font-bold text-center"
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          variants={{
            scale: {scale: 1.1, originX: 0, color: "#e5ce76"},
            initial: {scale: 1, originX: 0, color: "#ffffff"},
          }}
          animate={controls}
        >
          HipHop
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default DirectionCard;
