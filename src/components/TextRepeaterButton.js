import React, { useState } from 'react'

export default function TextRepeaterButton() {

  const [repetitions, setRepetitions] = useState(1);
  const handleClick = () => setRepetitions(repetitions + 1);

  const repsArr = []
  for (let i = 0; i < repetitions; i++) {
    repsArr.push(<span key={i}>I like this text <br/> </span>)
  }

  return (
    <button className='TextRepeatText' onClick={handleClick}>
      { repsArr }
    </button>
  )
}
