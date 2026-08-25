import React from 'react'
import { MyButton } from './components/MyButton'
import { UseStateExample } from './components/UseStateExample';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import "./App.css";

export default function App() {
  let name = 'Lalit'
  let nameList = ['Java', 'C++', 'React', 'ruby and rails', 'Python', 'JavaScript'];
  return (
    <>

     {/* <UseStateExample></UseStateExample> */}
     <Header></Header>
     <Body></Body>
     <Footer></Footer>
    </>
  )
}