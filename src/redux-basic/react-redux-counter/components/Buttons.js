import React from 'react'
import Counter from '../containers/Counter'

const Buttons = () => {
  return (
    <div>
      <Counter behavior="INCREMENT">
        +
      </Counter>
      <Counter behavior="DECREMENT">
        -
      </Counter>
    </div>
  )
}

export default Buttons
