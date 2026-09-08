import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: false },
    { id: 2, text: 'Understand useState hook', completed: true },
    { id: 3, text: 'Practice React Router', completed: false }
  ])
  const [newTodo, setNewTodo] = useState('')

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

  const inputStyle = {
    width: '70%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px'
  }

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  }

  const todoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    margin: '10px 0',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    border: '1px solid #e0e0e0'
  }

  const todoTextStyle = {
    flex: 1,
    marginLeft: '10px',
    textDecoration: 'line-through',
    color: '#999'
  }

  const todoTextActiveStyle = {
    flex: 1,
    marginLeft: '10px',
    color: '#333'
  }

  const deleteButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginLeft: '10px'
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

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Todo List</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
          This component demonstrates array state management
        </p>
        
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            style={inputStyle}
          />
          <button onClick={addTodo} style={buttonStyle}>Add</button>
        </div>
        
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999' }}>No todos yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <div key={todo.id} style={todoItemStyle}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ cursor: 'pointer' }}
              />
              <span style={todo.completed ? todoTextStyle : todoTextActiveStyle}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={deleteButtonStyle}
              >
                Delete
              </button>
            </div>
          ))
        )}
        
        <Link to="/" style={linkStyle}>Back to Home</Link>
      </div>
    </div>
  )
}

export default Todo