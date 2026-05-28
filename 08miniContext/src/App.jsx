import { useState } from 'react'
import UserContextProvider from './context/USerContextProvider'

import './App.css'
import Login from './context/components/Login'
import Profile from './context/components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Context API Example with UserContext</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App


//USERContextProvider is a component that provides the user context to its children. It uses the useState hook to manage the user state and provides both the user and setUser function through the context value. This allows any component that consumes the UserContext to access and update the user state as needed. In this example, the Login component can update the user state, and the Profile component can access it to display the user's information.