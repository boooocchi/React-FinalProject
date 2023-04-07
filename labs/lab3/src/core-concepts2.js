import React from 'react'
import ReactDOM from 'react-dom'

function Person(props) {

    const handleClick = (e) => {
        console.log(e)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <input onChange={handleChange} />
        // <li onClick={handleClick}>
        //     <input on value={props.firstName} />
        // </li>
    )
}

function App() {
    const people = ["Hoge", "Boke", "Poke"]
    return (
        <ul>
            {people.map((person, index) => {
                return (
                    <React.Fragment key={index}>
                        <Person firstName={person} />
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)
