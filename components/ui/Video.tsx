import { useEffect, useRef } from "react";
import {clsx} from "clsx";
import {ContainerStyles} from "@/types/types";

interface IVideoProps extends ContainerStyles {
  path: string;
  shadow?: boolean;
  onEnded: () => void;
}

const Video = ({ path, containerStyles, shadow, onEnded }: IVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log(videoRef.current?.clientHeight)
    videoRef.current?.load();
  }, [path]);

  return (
    <div className={clsx(containerStyles, "relative")}>
      <video
        className="w-full shadow-lg"
        ref={videoRef}
        muted
        autoPlay
        playsInline
        width="320"
        height="240"
        onEnded={onEnded}
      >
        <source src={path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {shadow && <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-40" />}
    </div>
  );
};

export default Video;
