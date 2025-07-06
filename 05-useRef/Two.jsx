/*
    1. Create a new Vite React project

    2. Create an GuessNumber.jsx with an GuessNumber component
       that is exported

    3. Inside GuessNumber, a text <input> element, a <button>
       with the text 'Guess!' inside, and an empty <p> element

    4. When the component mounts, generate a random integer/whole
       number between 1-10. Store this in a reference and do not
       render it to the DOM.

    5. Your goal is to enter a number in the text box and click
       "Guess" to guess the secret number. If you guess too high,
       the <p> should say "Too high!", if you guess too low it should
       say "Too low!" and if you guess correctly, it should say
       "You win!"

    6. Replace the <App /> in main.jsx with your GuessNumber
       component and test that it works in your Browser

    HINT*  console.log the number while you test

    BONUS* Make the game automatically restart a few seconds
           after you guess correctly and with a new random
           number to guess
*/

import React, { useRef, useEffect, useState } from "react";

const Two = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const randomNumber = useRef(null);

  useEffect(() => {
    randomNumber.current = Math.floor(Math.random() * 10) + 1; // 1-10 range
    console.log("Random number:", randomNumber.current); // For testing
  }, []);

  const handleGuess = () => {
    const guessNum = parseInt(guess);

    if (isNaN(guessNum)) {
      setMessage("Please enter a valid number!");
      return;
    }

    if (guessNum === randomNumber.current) {
      setMessage("You win!");
    } else if (guessNum < randomNumber.current) {
      setMessage("Too low!");
    } else {
      setMessage("Too high!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number 1-10"
      />
      <button onClick={handleGuess}>Guess!</button>
      <p>{message}</p>
    </div>
  );
};

export default Two;
