//CSS Classes in JSX

//external imports
import React from 'react'
import classNames from 'classnames'

//styles
import styles from './Main.module.css'

//internal imports
import Button from './components/Button'

const Main = () => {
  const handleClick = () => {
    console.log("Clicked")
  }
  return (
    <>
      <Button handleClick={handleClick}>Click1</Button>
      <Button handleClick={handleClick}>Click2</Button>
      <button className={styles.btn}>Main</button>
    </>
  )
}

export default Main