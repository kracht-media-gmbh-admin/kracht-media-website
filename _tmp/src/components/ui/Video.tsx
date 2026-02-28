import { VideoAsset } from "@/types";

type VideoProps = {
    style: React.CSSProperties,
    video: VideoAsset,
};

export default function Video({ style, video }: VideoProps) {
  return (
    <>
      <video
          style={style}
          autoPlay
          loop
          muted
        >
            <source src={video.src} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    </>
  );
}
