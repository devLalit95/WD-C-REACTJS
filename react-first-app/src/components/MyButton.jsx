import React from 'react'

export const MyButton = (props) => {
    let name1 = 'Lalit'
  return (
    <button onClick={() => alert(`Hello ${name1} and ${props.name}`)}>Click me</button>
  )
}
