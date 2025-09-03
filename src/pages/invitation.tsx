import { type FC } from "react";
import { ParentComp } from "../components/parent-comp";
// import { Heart } from "lucide-react";
import { RSVPForm } from "@/components/rsvp-form";
import { motion } from "motion/react";

const Invitation: FC = () => {
  return (
    <ParentComp>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        {/* <Heart className="text-red-800 mb-2" /> */}
        <h1 className="text-4xl font-amatic w-full text-center font-bold mb-4">
          Our Invitation
        </h1>
        <p className="w-full text-center pb-8 max-w-xl text-gray-700">
          Join us as we celebrate our love and begin our journey together as
          husband and wife
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <RSVPForm />
      </motion.div>
    </ParentComp>
  );
};

export default Invitation;
