import cn from "@/lib/utils";
import React from "react";

type Props = {} & React.IframeHTMLAttributes<HTMLIFrameElement>;

function Map({ className }: Props) {
  return (
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.8406648664372!2d31.28827191163124!3d36.822337866335054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c35f38119bfdd1%3A0xf2978d174c5db71c!2zRWxpdCDDh2FtYcWfxLFyaGFuZSAvIExhdW5kcnkgLyBXw6RzY2hlcmVp!5e0!3m2!1str!2str!4v1699134332821!5m2!1str!2str"
      className={cn("w-full h-full", className)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default Map;
