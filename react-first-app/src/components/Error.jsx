import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="lead text-muted mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button as={Link} to="/" variant="primary" size="lg">
        Go to Home
      </Button>
    </Container>
  )
}

export default Error
