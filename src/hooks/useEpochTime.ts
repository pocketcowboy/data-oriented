import { useEffect, useState } from "preact/hooks";

const useEpochTime = () => {
  const [time, setTime] = useState<number>();
  useEffect(() => {
    const id = setInterval(() => {
      fetch("https://1.1.1.1/cdn-cgi/trace")
        .then((res) => res.text())
        .then((text) => {
          setTime(+/ts=(\d+)/g.exec(text)[1]);
        });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return time;
};

export default useEpochTime;
