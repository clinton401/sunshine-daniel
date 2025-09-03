import { type FC } from "react";
import { ParentComp } from "@/components/parent-comp";
import weddingImg from "@/assets/wedding.jpg";
import { motion } from "motion/react";

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  src: weddingImg,
  alt: `Wedding photo ${i + 1}`,
}));

const Gallery: FC = () => {
  return (
    <ParentComp>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-amatic w-full text-center font-bold mb-4">
          Wedding Gallery
        </h1>
        <p className="w-full text-center pb-8 text-gray-700">
          A glimpse into our beautiful day full of laughter, love, and memories.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[80%] gap-4 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {images.map((img) => (
          <motion.div
            key={img.id}
            className="rounded-xl overflow-hidden shadow-md relative"

            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover hover:scale-110 transition-transform duration-300 ease-in"
            />
          </motion.div>
        ))}
      </motion.div>
    </ParentComp>
  );
};

export default Gallery;
