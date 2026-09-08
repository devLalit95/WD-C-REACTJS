import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="display-4 mb-4">Welcome to React Learning</h1>
      <p className="lead mb-4">
        This is a practice project to learn React concepts including routing, 
        state management, props, and component composition.
      </p>
      <p className="text-muted">
        Use the navigation bar above to explore different components and features.
      </p>
    </Container>
  )
}

export default Home