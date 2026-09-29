import React from 'react'
import { context } from '../Home';
const C = () => {
    const obj = React.useContext(context);
  return (
    <div>
        <h1>C</h1>
        <h2>{obj.data}</h2>
        <button onClick={()=>obj.setData("Hello from C")}>Change Data</button>

    </div>
  )
}

export default C