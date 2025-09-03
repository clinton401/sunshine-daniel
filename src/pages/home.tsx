import { type FC, useEffect, useState } from "react";
import { ParentComp } from "../components/parent-comp";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ParentComp>
      <section className="flex flex-col items-center text-center *:text-center px-[5%]">
        <h2 className="text-3xl font-josefin font-semibold mb-2">Monday December 5, 2025</h2>
        <h3 className="text-2xl font-josefin font-semibold mb-6">Lagos, Nigeria</h3>


<p className="font-josefin text-lg  mb-6">{timeLeft.days} Days { timeLeft.hours} Hrs {timeLeft.minutes} Mins {timeLeft.seconds} Secs</p>
        
      </section>

    </ParentComp>
  );
};

export default Home;
