import React,{useState,useContext} from 'react'
import UserContext from '../UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your name' />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login

//useState is a React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. In this example, we use useState to create a state variable called username and a function called setUsername to update it.

//why e.preventDefault() is used in the handleSubmit function?

//e.preventDefault() is used to prevent the default behavior of the form submission, which is to refresh the page. By calling e.preventDefault(), we can handle the form submission in our own way without causing a page reload. This allows us to update the user context with the entered username and password without losing any state or data on the page.