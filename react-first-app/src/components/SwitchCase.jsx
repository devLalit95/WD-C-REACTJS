import React from 'react'
import { useParams } from 'react-router-dom'

const SwitchCase = () => {
     const {pid} = useParams();
     
     let content;
     
     switch(pid){
        case '1': 
            content = <div>Product 1 - PID: {pid}</div>
            break
        case '2':
            content = <div>Product 2 - PID: {pid}</div>
            break
        case '3':
            content = <div>Product 3 - PID: {pid}</div>
            break
        default:
            content = <div>Product Not Found - PID: {pid || 'No PID provided'}</div>
     }
     
  return (
    <div>
      <h2>Switch Case Component</h2>
      {content}
    </div>
  )
}

export default SwitchCase
