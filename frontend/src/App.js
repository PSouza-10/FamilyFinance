import React, { useState } from 'react'
import GlobalStyle from './globalStyle.js'
import { ThemeProvider } from 'styled-components'
import transactions from './placeholder/transaction'
import returnTheme from './Theme'
import Balance from './components/Balance/index.jsx'
import TransactionCard, { Cards } from './components/TransactionCard'
import AddTransaction from './components/AddTransaction/index.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TransactionInfo from './Pages/TransactionInfo/index.jsx'
import AddTransactionPage from './Pages/AddTransactionPage'

export default function App() {
  const [theme, setTheme] = useState({
    mode: false,
    color: 'green'
  })

  return (
    <ThemeProvider theme={returnTheme(theme.mode, theme.color)}>
      <GlobalStyle />
      <Router>
        <Route exact path='/transaction/:_id' component={TransactionInfo} />

        <Route exact path='/add' component={AddTransactionPage}></Route>
        <Route exact path='/'>
          <Balance spent={`R$${2000.0}`} theme={theme} setTheme={setTheme} />
          <Cards>
            {transactions.map(transaction => (
              <TransactionCard {...transaction} key={transaction._id} />
            ))}
          </Cards>
          <AddTransaction />
        </Route>
      </Router>
    </ThemeProvider>
  )
}
