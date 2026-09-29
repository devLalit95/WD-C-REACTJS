import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectExamples = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => setData(json));
  }, []);
  return (
    <div>
      <h2>UseEffectExamples</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default UseEffectExamples