import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Profile from './components/Profile'
import { SimpleForm } from './components/SimpleForm'
import Error from './components/Error'
import Navbar from './components/Navbar'
import SwitchCase  from './components/SwitchCase'
import SearchParamsExample from './components/SearchParamsExample'
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/switch/:pid" element={<SwitchCase />} />
        <Route path="/searchparams" element={<SearchParamsExample />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}