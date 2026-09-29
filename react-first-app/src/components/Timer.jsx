import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []); 

 
  return (
    <div>
        <h1>Timer</h1>
        <p>Time: {time}</p>

    </div>
  )
}

export default Timer