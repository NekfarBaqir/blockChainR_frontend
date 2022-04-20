import { useEffect, useState } from "react";
import { intervalToDuration, isBefore } from "date-fns";

export const useTicker = (futureDate) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    let unmounted = false;
    let interval;
    if (!unmounted && typeof window !== undefined) {
      interval = setInterval(() => {
        setNow(new Date());
      }, 1000);
    }
    return () => {
      unmounted = true;
      clearInterval(interval);
    };
  }, [futureDate]);

  const isTimeUp = isBefore(new Date(futureDate), now);

  if (isTimeUp) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isTimeUp };
  }

  let { days, hours, minutes, seconds } = intervalToDuration({
    start: now,
    end: new Date(futureDate),
  });

  return { days, hours, minutes, seconds, isTimeUp };
};
