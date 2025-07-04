import { useEffect } from "react";
import { useState } from "react";
const TwoChild = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [timer]);

  useEffect(() => {
    console.log(" i run on first mount and every render From Two Child");
  });

  return (
    <div>
      <h1> Time on page: {timer} second(s)</h1>
    </div>
  );
};

export default TwoChild;
