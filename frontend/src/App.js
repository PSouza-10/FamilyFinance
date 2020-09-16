import React, { useContext } from 'react'
import GlobalStyle from './globalStyle.js'
import { ThemeProvider } from 'styled-components'
import returnTheme from './Theme'

import Routes from './components/Routes.jsx'
import { GlobalContext } from './Context/index.js'

export default function App() {
  const { updateTransactions, theme } = useContext(GlobalContext)

  navigator.serviceWorker.onmessage = ({ data }) => {
    const { type, body } = JSON.parse(data)
    if (type === 'Update Transactions') {
      updateTransactions(body)
    }
  }
  return (
    <ThemeProvider theme={returnTheme(theme.darkMode, theme.color)}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}
