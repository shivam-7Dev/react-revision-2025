import "./index.css"
import { useState, useEffect } from 'react'

const ProgressBar = () => {

    const [progress, setProgress] = useState(0)
    console.log({ progress });

    // useEffect(()=>{

    // setTimeout(()=>{
    //     if(progress<100){
    //     setProgress(prev=>prev+1)

    //     }
    // },100)
    // },[progress])

    useEffect(() => {
        const interval = setInterval(() => {

            console.log("functin called wiht value", progress);

            setProgress(prev => {
                if (prev < 100) {
                    return prev + 1
                } else {
                    return prev
                }
            })

            //      if(progress<100){
            // setProgress(prev=>prev+1)

            // }
        }, 100);
    }, [])

    return <div>
        <h1>Progress bar</h1>
        <div style={{ width: "50vw", backgroundColor: "black", height: "20px", border: "2px" }}>
            <div style={{ width: `${progress}%`, backgroundColor: "pink", height: "20px" }}>

            </div>
        </div>
    </div>
}

export default ProgressBar