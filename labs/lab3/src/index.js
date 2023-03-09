import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    state = {}

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState(() => ({ anything: e.target.value }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.anything)
    }

    render() {
        return (
            // <>
            //     <input type="text" onChange={this.handleChange} />
            //     <p>{this.state.anything}</p>
            // </>
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)
