import { useState,useEffect } from 'react'
 

function Intro() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(()=>{
    console.log("i run on every render");
  })
  useEffect(()=>{
    console.log("i run on first mount");
  },[])

  useEffect(()=>{
    console.log("i run on first mount and when count1 changes");
  },[count1])

  useEffect(()=>{
    console.log(" i run on first mount and when count2 changes");
  },[count2])

  useEffect(()=>{
    const reand= Math.random()*10
   const id= setInterval(() => {
      console.log(reand);
    }, 1000);


    return ()=>{
      clearInterval(id)
    }
  })

  return (
<div>
  <p>count one: {count1}</p>
  <p>count two: {count2}</p>
  <button onClick={()=>{setCount1(count1+1)}} >Increment one</button>
  <button onClick={()=>{setCount2(count2+1)}} >Increment two</button>
</div>
  )
}

export default Intro
