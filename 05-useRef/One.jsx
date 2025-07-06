/*
    1. Create a new Vite React project

    2. Create an Video.jsx with an Video component
       that is exported

    3. Inside Video, return a <video> element with
       the src set to a video file you have locally
       (Check the vite documentation for how to import
        static asset urls)

    4. Make it so then when you move your mouse over the
       video it plays, and when your mouse leaves the
       video it pauses

    5. Replace the <App /> in main.jsx with your Video
       component and test that it works in your Browser

    HINT* Check out the <video> element on MDN
*/
import React, { useRef } from "react";
import videoFile from "./monkey.mp4"; // Import the video

const One = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      One
      <video
        ref={videoRef}
        src={videoFile}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        muted // Required for autoplay in most browsers
        width="400"
        height="300"
      />
    </div>
  );
};

export default One;
