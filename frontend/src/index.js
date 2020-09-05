import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { GlobalProvider } from './Context'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'
ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
