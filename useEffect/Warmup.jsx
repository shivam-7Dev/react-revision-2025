/*
    1. Create a new Vite React project

    2. Create a Counter.jsx with a Counter component
       inside that you can export.

    3. Add state for a counter which is a number as well
       as an <h1> and a <button>. Have the <h1> display
       the current counter, starting at 0. When you click
       the button, increase the counter by 1.

    4. How would you use useEffect to log:
       1. "Component Mounted" only when the component mounts
       2. "Counter state changed" only when counter changes

    5. Import Counter in to main.jsx and replace the <App />
       with it to test that it works in your Browser.
*/

import { useEffect } from "react"
import { useState } from "react"

const Warmup=()=>{
   const [counter,setCounter]= useState(0)
   useEffect(()=>{
    console.log("i run on first mount and when counter change");
   },[counter])
    useEffect(()=>{
    console.log("i run on first mount and every render ");
})
    return <div>
        <h1>counter:{counter}</h1>
        <button onClick={()=>{setCounter(counter+1)}} >Increase</button>
    </div>
    

}
export default Warmup