import Image from "next/image";
import type { Photo as PhotoData } from "@/content/images";

type Props = {
  photo: PhotoData;
  sizes: string;
  preload?: boolean;
  grain?: boolean;
  // Fade only the top and bottom edges (for full-width bands). Otherwise all four edges fade.
  fade?: boolean;
  // Run the image edge to edge across the viewport.
  bleed?: boolean;
  // Hard edges with small rounded corners, instead of fading into the page.
  crisp?: boolean;
  // Tailwind aspect classes to crop the photo to a different shape, e.g. per breakpoint.
  aspect?: string;
  className?: string;
};

// An image at a fixed aspect ratio. By default its edges dissolve into the page background.
export function Photo({
  photo,
  sizes,
  preload = false,
  grain = false,
  fade = false,
  bleed = false,
  aspect,
  crisp = false,
  className = "",
}: Props) {
  const frame = [
    "relative overflow-hidden",
    crisp ? "rounded-[3px] bg-surface" : fade ? "fade-y" : "fade-edges",
    grain ? "grain" : "",
    bleed ? "mx-[calc(50%-50vw)]" : "",
    aspect ?? "",
  ].join(" ");

  return (
    <figure className={className}>
      <div className={frame} style={aspect ? undefined : { aspectRatio: photo.ratio }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      </div>
    </figure>
  );
}
