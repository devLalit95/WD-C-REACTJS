import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    role: 'Student',
    bio: 'Learning React and web development'
  })

  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center'
  }

  const infoStyle = {
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    border: '1px solid #e0e0e0'
  }

  const labelStyle = {
    fontWeight: 'bold',
    color: '#555',
    display: 'block',
    marginBottom: '5px'
  }

  const valueStyle = {
    color: '#333',
    fontSize: '16px'
  }

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px'
  }

  const logoutButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545'
  }

  const linkStyle = {
    display: 'block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center'
  }

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>User Profile</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
          This component demonstrates conditional rendering
        </p>
        
        {!isLoggedIn ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
              Please log in to view your profile
            </p>
            <button onClick={toggleLogin} style={buttonStyle}>
              Login
            </button>
          </div>
        ) : (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <button onClick={toggleLogin} style={logoutButtonStyle}>
                Logout
              </button>
            </div>
            
            <div style={infoStyle}>
              <span style={labelStyle}>Name:</span>
              <span style={valueStyle}>{user.name}</span>
            </div>
            
            <div style={infoStyle}>
              <span style={labelStyle}>Email:</span>
              <span style={valueStyle}>{user.email}</span>
            </div>
            
            <div style={infoStyle}>
              <span style={labelStyle}>Age:</span>
              <span style={valueStyle}>{user.age} years old</span>
            </div>
            
            <div style={infoStyle}>
              <span style={labelStyle}>Role:</span>
              <span style={valueStyle}>{user.role}</span>
            </div>
            
            <div style={infoStyle}>
              <span style={labelStyle}>Bio:</span>
              <span style={valueStyle}>{user.bio}</span>
            </div>
          </div>
        )}
        
        <Link to="/" style={linkStyle}>Back to Home</Link>
      </div>
    </div>
  )
}

export default Profile