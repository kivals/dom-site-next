import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { ContainerStyles } from "@/types/types";

interface IVideoProps extends ContainerStyles {
  path: string;
  shadow?: boolean;
  onEnded: () => void;
}

const Video = ({ path, containerStyles, shadow, onEnded }: IVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoHeight, setVideoHeight] = useState<string>("auto");

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.load();

      const handleLoadedData = () => {
        setVideoHeight(String(videoElement.clientHeight));
      };

      videoElement.addEventListener("loadeddata", handleLoadedData);

      return () => {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [path]);

  return (
    <div
      className={clsx(containerStyles, "relative")}
      style={{ height: `${videoHeight}px` }}
    >
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
      {shadow && (
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-40" />
      )}
    </div>
  );
};

export default Video;
