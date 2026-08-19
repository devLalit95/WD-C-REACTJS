import React from 'react'

export const UseStateExample = () => {
  const [number, setNumber] = React.useState([2,4,6,8,10]);
  function handleClick() {
  setNumber([...number, number.map((n) => n + 2)]);
    
  }



  return (
    <div>
        {number.map((n) => (
            <li key={n}>{n}</li>
        ))}
        <button onClick={handleClick}>Click me</button>
        
    </div>
  )
}
