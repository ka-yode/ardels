import { useEffect, useState } from "react";

export const useCountdown = (maxTime: number) => {
  const [currentTime, setCurrentTime] = useState(maxTime);

  useEffect(() => {
    if (currentTime !== 0) {
      setTimeout(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
    }
  }, [currentTime]);
  let counterDone = currentTime === 0;
  return { currentTime, counterDone };
};
