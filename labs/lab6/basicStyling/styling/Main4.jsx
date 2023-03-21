//CSS Classes in JSX

//external imports
import React from 'react'
import classNames from 'classnames'

//styles
import './Main.css'

//internal imports


const Button = ({ children, handleClick, selected = false }) => {

  const btnStyles = classNames('btn', {
    'btn-selected': selected,
  })

  return (
    <button onClick={handleClick} className={btnStyles}>
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
      <Button  handleClick={handleClick}>Click1</Button>
      <Button selected handleClick={handleClick}>Click2</Button>
    </>
  )
}

export default Main