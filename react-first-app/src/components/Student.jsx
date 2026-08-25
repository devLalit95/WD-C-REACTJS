import React from 'react'
import "../../src/App.css"

export const Student = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  )
}
