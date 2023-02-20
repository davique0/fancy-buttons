import React, { useState } from 'react'

export default function CounterButton() {

  const [clickAmount, setclickAmount] = useState(0);
  const handleClick = () => setclickAmount(clickAmount + 1);

  return (
    <button className='CounterButton' onClick={handleClick}>
      you clicked me {clickAmount} amount of times
    </button>
  )
}
