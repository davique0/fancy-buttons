import React, { useState } from 'react'

export default function LightSwitchButton() {

  const [light, setLight] = useState('off');
  const handleClick = () => light === 'on' ? setLight('off') : setLight('on')

  return (
    <button className='LightSwitchButton' onClick={handleClick}>
      {light === 'on' && <span><i>💡</i> I'm on!</span>}
      {light === 'off' && <span className='off'><i>💡</i> I'm off!</span>}
    </button>
  )
}
