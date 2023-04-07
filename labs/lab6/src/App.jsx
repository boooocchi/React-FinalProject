import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Main from './pages/Main'
import Login from './pages/Login/Login'
// import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please Login'
  }, [user])

  return user ? (
     <Main
      user={user}
      handleAddPost={handleAddPost}
      posts={posts}
      setPosts={setPosts}
    />
  ): <Login setUser={setUser} />
}

export default App
