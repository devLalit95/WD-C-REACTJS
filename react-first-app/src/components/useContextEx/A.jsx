import React from 'react'
import B from './B'
import { context } from '../Home';
const A = () => {
    const obj = React.useContext(context);
  return (
    <div>
        <B />
    </div>
  )
}

export default A