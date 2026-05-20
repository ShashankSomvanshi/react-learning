import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function MyApp() {
    return (
        <>
        <h1>Hello FiFa World Cup</h1>
        </>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     Children: 'Click me to go to Google'
// }

const anthorReactElement = (
    <a href="https://www.google.com" target="_blank">
        Click me to go to Google
    </a>
)
const anotherUser = 'Virat Kohli';

const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Click me to Vist to Google',
    `Hello, ${anotherUser}!`
)
createRoot(document.getElementById('root')).render(
  
    // <MyApp />

    // <App />

    // anthorReactElement

    reactElement
  
)
