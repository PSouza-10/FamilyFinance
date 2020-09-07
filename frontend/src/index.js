import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { GlobalProvider } from './Context'

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
