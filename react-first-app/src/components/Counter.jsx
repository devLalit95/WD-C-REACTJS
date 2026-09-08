import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const containerStyle = {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  }

  const headingStyle = {
    color: '#333',
    marginBottom: '20px'
  }

  const countDisplayStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#007bff',
    margin: '20px 0'
  }

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  }

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545'
  }

  const stepInputStyle = {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '80px',
    textAlign: 'center'
  }

  const linkStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px'
  }

  const increment = () => setCount(prev => prev + step)
  const decrement = () => setCount(prev => prev - step)
  const reset = () => setCount(0)

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Counter Component</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          This component demonstrates state management using useState hook
        </p>
        
        <div style={countDisplayStyle}>
          {count}
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px', color: '#333' }}>
            Step:
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              style={stepInputStyle}
              min="1"
            />
          </label>
        </div>
        
        <div>
          <button onClick={decrement} style={buttonStyle}>- Decrease</button>
          <button onClick={increment} style={buttonStyle}>+ Increase</button>
          <button onClick={reset} style={resetButtonStyle}>Reset</button>
        </div>
        
        <Link to="/" style={linkStyle}>Back to Home</Link>
      </div>
    </div>
  )
}

export default Counter