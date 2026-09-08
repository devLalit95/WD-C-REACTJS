import React, { useState } from 'react'

export function SimpleForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    age: '',
    dob: '',
    gender: '',
    website: '',
    experience: '',
    time: '',
    languages: [],
    experienceLevel: 5
  })

  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          languages: [...prev.languages, value]
        }))
      } else {
        setFormData(prev => ({
          ...prev,
          languages: prev.languages.filter(lang => lang !== value)
        }))
      }
    } else if (type === 'range') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
  }

  const cardStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e0e0e0'
  }

  const inputStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px'
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    // fontWeight: 'bold',
    color: '#333'
  }

  const formGroupStyle = {
    marginBottom: '20px'
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <div style={cardStyle}>
        <div style={{backgroundColor: '#ffce47',fontSize: '24px', fontWeight: 'bold', padding: '6px', borderRadius: '5px 5px 5px 5px', color: 'white', marginBottom: '20px'}}>
          <h2 style={{ textAlign: 'center', textAlign: 'center', fontSize: '24px', color: '#333',  }}>Student Registration</h2>
        </div>
        <form onSubmit={handleSubmit}>
          
          <div style={formGroupStyle}>
            <label htmlFor="fullName" style={labelStyle}>Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="age" style={labelStyle}>Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="dob" style={labelStyle}>Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="gender" style={labelStyle}>Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="website" style={labelStyle}>Website:</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={inputStyle}
              placeholder="https://example.com"
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="experience" style={labelStyle}>Experience (years):</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              style={inputStyle}
              min="0"
              step="0.5"
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="time" style={labelStyle}>Preferred Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Languages:</label>
            <div style={{ marginTop: '10px' }}>
              <label style={{ marginRight: '20px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="languages"
                  value="java"
                  checked={formData.languages.includes('java')}
                  onChange={handleChange}
                  style={{ marginRight: '5px' }}
                />
                Java
              </label>
              <label style={{ marginRight: '20px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="languages"
                  value="python"
                  checked={formData.languages.includes('python')}
                  onChange={handleChange}
                  style={{ marginRight: '5px' }}
                />
                Python
              </label>
              <label style={{ cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="languages"
                  value="javascript"
                  checked={formData.languages.includes('javascript')}
                  onChange={handleChange}
                  style={{ marginRight: '5px' }}
                />
                JavaScript
              </label>
            </div>
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="experienceLevel" style={labelStyle}>
              Experience Level: <span style={{ color: '#007bff' }}>{formData.experienceLevel}</span>/10
            </label>
            <input
              type="range"
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              min="0"
              max="10"
              step="1"
              style={{ 
                width: '100%', 
                marginTop: '10px',
                cursor: 'pointer'
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '12px', 
              color: '#666',
              marginTop: '5px'
            }}>
              <span>0 (Beginner)</span>
              <span>10 (Expert)</span>
            </div>
          </div>

          <button 
            type="submit"
            style={{ 
              width: '100%',
              padding: '12px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: '10px'
            }}
          >
            Register Student
          </button>
        </form>

        {submittedData && (
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #dee2e6'
          }}>
            <h3 style={{ color: '#333', marginBottom: '15px' }}>Submitted Data:</h3>
            <p style={{ margin: '8px 0' }}><strong>Full Name:</strong> {submittedData.fullName}</p>
            <p style={{ margin: '8px 0' }}><strong>Age:</strong> {submittedData.age}</p>
            <p style={{ margin: '8px 0' }}><strong>Date of Birth:</strong> {submittedData.dob}</p>
            <p style={{ margin: '8px 0' }}><strong>Gender:</strong> {submittedData.gender}</p>
            <p style={{ margin: '8px 0' }}><strong>Website:</strong> {submittedData.website || 'N/A'}</p>
            <p style={{ margin: '8px 0' }}><strong>Experience:</strong> {submittedData.experience || 'N/A'} years</p>
            <p style={{ margin: '8px 0' }}><strong>Preferred Time:</strong> {submittedData.time || 'N/A'}</p>
            <p style={{ margin: '8px 0' }}><strong>Languages:</strong> {submittedData.languages.join(', ') || 'None'}</p>
            <p style={{ margin: '8px 0' }}><strong>Experience Level:</strong> {submittedData.experienceLevel}/10</p>
          </div>
        )}
      </div>
    </div>
  )
}