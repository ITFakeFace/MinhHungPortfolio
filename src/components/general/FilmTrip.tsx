import Image, { StaticImageData } from "next/image";

interface FilmStripProps {
  images: StaticImageData[];
  direction?: "left" | "right";
}

const FilmStrip = ({ images, direction = "left" }: FilmStripProps) => {
  const animationClass =
    direction === "right" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="relative w-full overflow-hidden py-10 bg-black/20 backdrop-blur-sm">
      <div className={`flex w-max ${animationClass}`}>
        {/* Track 1 */}
        <div className="flex whitespace-nowrap">
          {images.map((logo, index) => (
            <div key={`first-${index}`} className="mx-8 flex-shrink-0">
              <Image
                src={logo}
                alt="Brand"
                className="h-24 md:h-48 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Track 2 (duplicate) */}
        <div className="flex whitespace-nowrap">
          {images.map((logo, index) => (
            <div key={`second-${index}`} className="mx-8 flex-shrink-0">
              <Image
                src={logo}
                alt="Brand"
                className="h-24 md:h-48 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmStrip;
