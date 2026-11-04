import Image from "next/image";
import type { Photo as PhotoData } from "@/content/images";

type Props = {
  photo: PhotoData;
  sizes: string;
  preload?: boolean;
  // Tailwind aspect classes to crop the photo to a different shape, e.g. per breakpoint.
  aspect?: string;
  // Tilt the frame slightly, like a sticker.
  tilt?: "left" | "right";
  className?: string;
};

const tilts = { left: "md:-rotate-1", right: "md:rotate-1" };

// An image in a chunky sticker frame: ink outline, rounded corners and a hard shadow.
export function Photo({ photo, sizes, preload = false, aspect, tilt, className = "" }: Props) {
  return (
    <figure className={className}>
      <div
        className={`card relative overflow-hidden ${tilt ? tilts[tilt] : ""} ${aspect ?? ""}`}
        style={aspect ? undefined : { aspectRatio: photo.ratio }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
          style={photo.focus ? { objectPosition: photo.focus } : undefined}
        />
      </div>
    </figure>
  );
}
