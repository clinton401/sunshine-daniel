import { type FC } from "react";
import { ParentComp } from "@/components/parent-comp";
import { Image as LucideImage } from "lucide-react";
import weddingImg from "@/assets/wedding.jpg";

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  src: weddingImg,
  alt: `Wedding photo ${i + 1}`,
}));

const Gallery: FC = () => {
  return (
    <ParentComp>
      <LucideImage className="text-pink-800 mb-2" />

      <h1 className="text-2xl w-full text-center font-bold mb-4">
        Wedding Gallery
      </h1>

      <p className="w-full text-center pb-8">
        A glimpse into our beautiful day — full of laughter, love, and memories.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {images.map((img) => (
          <div key={img.id} className="rounded-xl overflow-hidden shadow-md">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-68 object-cover"
            />
          </div>
        ))}
      </div>
    </ParentComp>
  );
};

export default Gallery;
