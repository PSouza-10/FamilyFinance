import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TransactionInfo from '../Pages/TransactionInfo'
import AddTransactionPage from '../Pages/AddTransactionPage'
import Index from '../Pages/Index'

export default function Routes({ theme, setTheme }) {
  return (
    <Router>
      <Route exact path='/transaction/:_id' component={TransactionInfo} />
      <Route exact path='/add' component={AddTransactionPage} />
      <Route
        exact
        path='/'
        render={() => <Index theme={theme} setTheme={setTheme} />}
      />
    </Router>
  )
}
