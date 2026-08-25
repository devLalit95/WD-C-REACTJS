import React from 'react'
import { Student } from './Student';
export const Body = () => {

    const students = [
        { id: 1, name: 'Lalit', age: 22, course: 'React' },
        { id: 2, name: 'Rohit', age: 23, course: 'Angular' },
        { id: 3, name: 'Saurabh', age: 24, course: 'Vue' },
        { id: 4, name: 'Ankit', age: 25, course: 'Node' },
    ]
  return (
    <div className="body-container">

     
      {students.map((student) => ( 
        <Student key={student.id} student={student} className="student" />
      ))}

    </div>
  )
}
