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

function App(){
    return(
        <Layout>
        {
            isAuth ? (
                <>
                    <Header username="hoge" />
                    <SignOut />
                </>
            ) : (
                <Login />
            )
        }
    </Layout>
    )
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />,rootNode)
