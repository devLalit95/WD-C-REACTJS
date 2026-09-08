import React from 'react'

import { useSearchParams,useNavigate } from 'react-router-dom'

export default function SearchParamsExample() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate =  useNavigate();
  
  // Get individual search params
  const name = searchParams.get('name') || ''
  const age = searchParams.get('age') || ''
  const city = searchParams.get('city') || ''

  // Update search params
  const updateParams = (key, value) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev)
      if (value) {
        newParams.set(key, value)
      } else {
        newParams.delete(key)
      }
      return newParams
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    setSearchParams({
      name: formData.get('name'),
      age: formData.get('age'),
      city: formData.get('city')
    })
  }

  const clearParams = () => {
    setSearchParams({})
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>useSearchParams Example</h2>
      
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h3>Current URL Parameters:</h3>
        <p><strong>Name:</strong> {name || 'Not set'}</p>
        <p><strong>Age:</strong> {age || 'Not set'}</p>
        <p><strong>City:</strong> {city || 'Not set'}</p>
        <p><strong>Full URL:</strong> {window.location.search}</p>
      </div>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Age:</label>
          <input
            type="number"
            name="age"
            defaultValue={age}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>City:</label>
          <input
            type="text"
            name="city"
            defaultValue={city}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        
        <button 
          type="submit" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Update URL
        </button>
        
        <button 
          type="button"
          onClick={clearParams}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}
        >
          Clear All
        </button>
      </form>

      <div style={{ padding: '15px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
        <h3>Quick Actions:</h3>
        <button 
          onClick={() => updateParams('name', 'John')}
          style={{ padding: '5px 10px', marginRight: '5px', cursor: 'pointer' }}
        >
          Set Name = John
        </button>
        <button 
          onClick={() => updateParams('age', '25')}
          style={{ padding: '5px 10px', marginRight: '5px', cursor: 'pointer' }}
        >
          Set Age = 25
        </button>
        <button 
          onClick={() => updateParams('city', 'New York')}
          style={{ padding: '5px 10px', marginRight: '5px', cursor: 'pointer' }}
        >
          Set City = New York
        </button>
        <button 
          onClick={() => updateParams('name', '')}
          style={{ padding: '5px 10px', cursor: 'pointer' }}
        >
          Remove Name
        </button>
      </div>
      <button 
          type="button"
          onClick={()=> navigate(-1)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}
        >
          Back
        </button>

         <button 
          type="button"
          onClick={()=> navigate(1)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}
        >
          Forward
        </button>

         <button 
          type="button"
          onClick={()=> navigate("/")}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}
        >
          Home
        </button>
    </div>
  )
}
