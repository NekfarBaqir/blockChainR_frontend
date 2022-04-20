import { useTicker } from "../hooks/useTicker";
import { useState, useEffect } from "react";
function Digit({ children, text, last }) {
  return (
    <div className="flex flex-col justify-center items-start">
      <span className="p-4 font-semibold text-black text-3xl md:text-4xl lg:text-5xl">
        {children}&nbsp; &nbsp; {last === true ? "" : ":"}
      </span>
      <span className="px-4 ml-3 text-gray-500 text-xs md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
}

export function CountDown({ time }) {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(time);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (partyTime) {
    return (
      <div className="flex justify-center items-center my-4 ">
        <Digit text={"d"}>00</Digit> <Digit text={"h"}>00</Digit>
        <Digit text={"m"}>00</Digit>
        <Digit text={"s"}>00</Digit>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center my-4 ">
      <Digit text={"d"}>{days}</Digit> <Digit text={"h"}>{hours}</Digit>
      <Digit text={"m"}>{minutes}</Digit>
      <Digit text={"s"} last={true}>
        {seconds}
      </Digit>
    </div>
  );
}
