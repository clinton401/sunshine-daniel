import {type FC,  useEffect, useState} from "react";
import {ParentComp} from "../components/parent-comp";
import { Button} from "../components/ui/button";
import {useNavigate} from "react-router";
import {User} from "lucide-react";

const targetDate = new Date("2025-12-05T00:00:00");

const getTimeRemaining = () => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { days, hours, minutes, seconds };
};


const Home: FC = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
const navigate = useNavigate();
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(getTimeRemaining());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
return <ParentComp >
    <h1 className="text-2xl w-full text-center font-bold mb-4">December 5, 2025</h1>
    <div className="w-full items-center  justify-center flex flex-wrap gap-6">
        <div className="flex flex-col items-center gap-2"><p className="text-sm">DAYS</p>
        <p className="w-[50px] h-[40px] items-center justify-center text-center bg-foreground text-white rounded-md flex">{timeLeft.days}</p></div>
        <div className="flex flex-col items-center gap-2"><p className="text-sm">HOURS</p>
        <p className="w-[50px] h-[40px] items-center justify-center text-center bg-foreground text-white rounded-md flex">{timeLeft.hours}</p></div>
        <div className="flex flex-col items-center gap-2"><p className="text-sm">MINUTES</p>
        <p className="w-[50px] h-[40px] items-center justify-center text-center bg-foreground text-white rounded-md flex">{timeLeft.minutes}</p></div>
        <div className="flex flex-col items-center gap-2"><p className="text-sm">SECONDS</p>
        <p className="w-[50px] h-[40px] items-center justify-center text-center bg-foreground text-white rounded-md flex">{timeLeft.seconds}</p></div>
    </div>
    <div className="w-full items-center justify-center flex pt-16 gap-4">
      <Button onClick={() => navigate("/invitation")} size="lg" className="cursor-pointer w-[100px]"> <User className="size-4 mr-1" />RSVP </Button>
    </div>
</ParentComp>
}

export default Home