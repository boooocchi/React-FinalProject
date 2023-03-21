//Inline style

import React from 'react'

const buttonStyling = {
    color: 'red',
    backgroundColor: 'blue'
}

const Button = ({ children }) => {
    return (
        <button style={buttonStyling}>{children}</button>
    )
}

const Main = () => {
  return (
    <Button>Click Me</Button>
  )
}

export default Main