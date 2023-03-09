import React from 'react'
import ReactDOM from 'react-dom'

const isAuth = true

function Header(props) {
    return <h1>Hello {props.username}</h1>
}

function Layout(props) {
    console.log(props)
    return (
        <div style={{ backgroundColor: "royalblue" }}>
            {props.children}
        </div>
    )
}

function Login(){
    return <div>Login form here...</div>
}

function SignOut(){
    return <button>Sign out</button>
}

//legacy class
// class Header extends React.Component{
//     customMethod(){
//         console.log("Hello")
//     }
//     render(){

//         return(
//             <h1 onClick={this.customMethod}>Hello {this.props.username}</h1>
//         )
//     }
// }

const rootNode = document.getElementById('root')
ReactDOM.render(
    <Layout>
        {isAuth ? <Header username="hoge" /> : <Login />}
        {isAuth && <SignOut/>}
    </Layout>,
    rootNode)
