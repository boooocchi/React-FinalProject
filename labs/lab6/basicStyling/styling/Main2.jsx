//CSS Classes in JSX
import React from 'react'
import './Main.css'

const Button = ({ children, handleClick }) => {
    return (
        <button onClick={handleClick} className="btn">
          <h4 className='btn-text'>{children}</h4>
        </button>
    )
}

const Main = () => {
  const handleClick = () => {
    console.log("Clicked")
  }
  return (
    <Button handleClick={handleClick}>Click Me</Button>
  )
}

export default Main