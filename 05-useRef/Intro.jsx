import React from "react";

const Intro = () => {
  /**
   * ✅ Yes — 0 is assigned synchronously and immediately
   *  on the first render.
   * State initialization: Happens synchronously during render
   * useEffect execution: Happens asynchronously after
   * the render is complete
   */
  const [counter, setCounter] = useState(0); // counter is immediately 0

  console.log("During render, counter is:", counter); // This runs first

  useEffect(() => {
    console.log("useEffect runs after render, counter is:", counter); // This runs after
  }, [counter]);

  return (
    <div>
      <h1>counter:{counter}</h1> {/* This displays 0 immediately */}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
};

export default Intro;
