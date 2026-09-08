import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px'
  }

  const paragraphStyle = {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '15px'
  }

  const linkStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px'
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About This Project</h1>
        
        <p style={paragraphStyle}>
          This is a college practice project designed to help students learn React.js 
          concepts in a hands-on manner.
        </p>
        
        <p style={paragraphStyle}>
          <strong>Learning Objectives:</strong>
        </p>
        <ul style={{ color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          <li>Understanding React components and JSX</li>
          <li>Managing state with useState hook</li>
          <li>Handling user events and forms</li>
          <li>React Router for navigation</li>
          <li>Component composition and props</li>
          <li>Conditional rendering</li>
        </ul>
        
        <p style={paragraphStyle}>
          Each component in this project demonstrates different React concepts 
          that are essential for building modern web applications.
        </p>
        
        <Link to="/" style={linkStyle}>Back to Home</Link>
      </div>
    </div>
  )
}

export default About