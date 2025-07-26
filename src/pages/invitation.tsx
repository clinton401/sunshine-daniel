import {type FC} from "react";
import { ParentComp } from "../components/parent-comp";
import { Heart } from "lucide-react";
import { RSVPForm } from "@/components/rsvp-form";


const Invitation: FC = () => {
return (
  <ParentComp>
    <Heart className=" text-red-800 mb-2" />

    <h1 className="text-2xl w-full text-center font-bold mb-4">
      Our Invitation
    </h1>
    <p className="w-full text-center pb-8">
      Join us as we celebrate our love and begin our journey together as husband
      and wife
    </p>

    <RSVPForm/>
  </ParentComp>
);
}


export default Invitation