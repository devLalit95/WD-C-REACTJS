import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const UseMemo = () => {
  const [items] = useState([
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.5 },
    { id: 2, name: 'Carrot', category: 'Vegetable', price: 0.8 },
    { id: 3, name: 'Banana', category: 'Fruit', price: 0.5 },
    { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.2 },
    { id: 5, name: 'Orange', category: 'Fruit', price: 0.9 },
    { id: 6, name: 'Spinach', category: 'Vegetable', price: 1.0 },
  ])

  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [count, setCount] = useState(0)

  // Without useMemo - this filters on every render
  // const filteredItems = items.filter(item => {
  //   const matchesCategory = filter === 'All' || item.category === filter
  //   const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   return matchesCategory && matchesSearch
  // })

  // With useMemo - only re-filters when filter or searchTerm changes
  const filteredItems = useMemo(() => {
    console.log('Filtering items...')
    return items.filter(item => {
      const matchesCategory = filter === 'All' || item.category === filter
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [filter, searchTerm, items])

  // Memoize the total price calculation
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...')
    return filteredItems.reduce((sum, item) => sum + item.price, 0)
  }, [filteredItems])

  const containerStyle = {
    maxWidth: '700px',
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

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px'
  }

  const thStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px',
    textAlign: 'left',
    border: '1px solid #ddd'
  }

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ddd'
  }

  const buttonStyle = {
    padding: '8px 16px',
    margin: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  }

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3'
  }

  const inputStyle = {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '200px',
    marginBottom: '15px'
  }

  const summaryStyle = {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '5px',
    marginTop: '20px',
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

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>useMemo Hook - Product Filter</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px', color: '#333' }}>
            Search:
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={inputStyle}
              placeholder="Search products..."
            />
          </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <span style={{ marginRight: '10px', color: '#333' }}>Filter by category:</span>
          {['All', 'Fruit', 'Vegetable'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={filter === category ? activeButtonStyle : buttonStyle}
            >
              {category}
            </button>
          ))}
        </div>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.category}</td>
                <td style={tdStyle}>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={summaryStyle}>
          <p><strong>Items shown:</strong> {filteredItems.length}</p>
          <p><strong>Total price:</strong> ${totalPrice.toFixed(2)}</p>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button 
            onClick={() => setCount(count + 1)} 
            style={buttonStyle}
          >
            Force Re-render (Count: {count})
          </button>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '5px', fontSize: '14px' }}>
          <strong>How useMemo helps:</strong><br />
          • Click "Force Re-render" - filtering and price calculation don't run again<br />
          • Change filter or search - only then does the expensive filtering re-run<br />
          • Check browser console to see when calculations actually run
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/" style={linkStyle}>Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default UseMemo