import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { GlobalProvider } from './Context'
import axios from 'axios'
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://family-finance-server.herokuapp.com'
    : 'https://192.168.15.39:5000'
axios.defaults.baseURL = baseUrl

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
