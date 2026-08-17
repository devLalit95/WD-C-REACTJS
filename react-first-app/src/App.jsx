import React from 'react'


export default function App() {
  let name = 'Lalit'
  let nameList = ['Lalit', 'Rohit', 'Sahil', 'Ramesh'];
  return (
    <>
      <h1>Hello, <span className="text-red-500">{name.toLocaleUpperCase()}</span></h1>
      <ul>
        {nameList.map((n) => (
          <li key={n}>{n.toUpperCase()}</li>
        ))}
      </ul>
    </>
  )
}