import React from 'react'


export default function App() {
  let name = 'Lalit'
  return (
    <>
      <h1>Hello, <span className="text-red-500">{name.toLocaleUpperCase()}</span></h1>
    </>
  )
}