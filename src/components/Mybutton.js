import React from 'react'

function Mybutton({count, onClick}) {
  return (
    <button onClick={onClick}>
      has presionado {count} veces
    </button>
  )
}

export default Mybutton