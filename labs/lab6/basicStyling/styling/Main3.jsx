//CSS Classes in JSX
import React from 'react'
import './Main.css'

const Button = ({ children, handleClick, selected = false }) => {

  let className = "btn"
  if (selected) {
    className += " btn-selected"
  }

  return (
    <button onClick={handleClick} className={className}>
      <h4 className='btn-text'>{children}</h4>
    </button>
  )
}

const Main = () => {
  const handleClick = () => {
    console.log("Clicked")
  }
  return (
    <>
      <Button selected handleClick={handleClick}>Click Me</Button>
      <Button handleClick={handleClick}>Click Me</Button>
    </>
  )
}

export default Main