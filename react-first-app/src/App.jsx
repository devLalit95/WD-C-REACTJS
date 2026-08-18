import React from 'react'
import { MyButton } from './components/MyButton'

export default function App() {
  let name = 'Lalit'
  let nameList = ['Java', 'C++', 'React', 'ruby and rails', 'Python', 'JavaScript'];
  return (
    <>
      {/* <h1>Hello, <span className="text-red-500">{name.toLocaleUpperCase()}</span></h1>
      <ul>
        {nameList.map((n) => (
          <li key={n}>{n.toUpperCase()}</li>
        ))}
      </ul> */}

      <MyButton name={name} />
    </>
  )
}