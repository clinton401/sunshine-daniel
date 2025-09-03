import { type FC } from "react";
import { motion } from "motion/react";
import { ParentComp } from "@/components/parent-comp";

const Location: FC = () => {
  return (
    <ParentComp>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold font-amatic mb-4">Wedding Location</h1>
        <p className="text-gray-700 mb-6">
          Come celebrate with us at our special venue in Lekki, Lagos.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border"
      >
        <iframe
          title="Wedding Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.2369816881662!2d3.3792055999999996!3d6.5243795999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44d5cfbf0db%3A0x55c5b95e23d05b87!2sLekki%20Phase%201%2C%20Lekki!5e0!3m2!1sen!2sng!4v1629554966657!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </ParentComp>
  );
};

export default Location;
