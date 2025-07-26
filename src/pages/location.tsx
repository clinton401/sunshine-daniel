import { type FC } from "react";
import { MapPin } from "lucide-react";
import { ParentComp } from "@/components/parent-comp";

const Location: FC = () => {
  return (
    <ParentComp>
      <MapPin className="text-green-700 mb-2" />

      <h1 className="text-2xl font-bold text-center mb-4">Wedding Location</h1>

      <p className="text-center pb-6">
        Come celebrate with us! Here's where the event will be taking place.
      </p>

      <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
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
      </div>
    </ParentComp>
  );
};

export default Location;
