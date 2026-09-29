import React from 'react'
import { Container } from 'react-bootstrap'
import A from './useContextEx/A'
export const context = React.createContext();


const Home = () => {
  const [data, setData] = React.useState("Hello from Home");
  return (
    <Container className="text-center py-5">
      <context.Provider value={{ data, setData }}>
        <h1>Home</h1>
        <A />
      </context.Provider>
    </Container>
  )
}

export default Home;