import { useEffect, useRef, useState } from "react";

const useTimer = (duration: number, finishCallback: () => void) => {
  const time = useRef(duration);
  const timerId = useRef<any>(null);
  const [remainSecond, setRemainSecond] = useState(duration);

  useEffect(() => {
    timerId.current = setInterval(() => {
      time.current -= 1;
      setRemainSecond(time.current);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (remainSecond <= 0) finishCallback();
  }, [remainSecond]);

  return {
    remainSecond,
  };
};

export default useTimer;
