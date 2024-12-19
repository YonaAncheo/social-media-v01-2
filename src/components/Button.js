import React, { useState } from 'react'

function Button() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }
  return <button onClick={handleClick}>
    I am a button, clicked: {count}</button>;
  
}

export default Button