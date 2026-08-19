import React from 'react'
import { MyButton } from './components/MyButton'
import { UseStateExample } from './components/UseStateExample';

export default function App() {
  let name = 'Lalit'
  let nameList = ['Java', 'C++', 'React', 'ruby and rails', 'Python', 'JavaScript'];
  return (
    <>

     <UseStateExample></UseStateExample>
    </>
  )
}