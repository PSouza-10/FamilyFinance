import React, { useState, useEffect } from 'react'
import GlobalStyle from './globalStyle.js'
import { ThemeProvider } from 'styled-components'
import returnTheme from './Theme'
import { getItem, setItem } from './utils/localStorage'
import Routes from './components/Routes.jsx'

export default function App() {
  const [theme, setTheme] = useState(
    getItem('theme') || {
      darkMode: false,
      color: 'green'
    }
  )

  useEffect(() => {
    const storedTheme = getItem('theme')

    if (!storedTheme || storedTheme !== theme) {
      setItem('theme', theme)
    }
  }, [theme])

  return (
    <ThemeProvider theme={returnTheme(theme.darkMode, theme.color)}>
      <GlobalStyle />
      <Routes theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  )
}
