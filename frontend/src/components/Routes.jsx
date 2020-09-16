import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TransactionInfo from '../Pages/TransactionInfo'
import AddTransactionPage from '../Pages/AddTransactionPage'
import EditTransactionPage from '../Pages/EditTransactionPage'
import Index from '../Pages/Index'

export default function Routes() {
  return (
    <Router>
      <Route exact path='/transaction/:_id' component={TransactionInfo} />
      <Route exact path='/edit/:_id' component={EditTransactionPage} />
      <Route exact path='/add' component={AddTransactionPage} />
      <Route exact path='/' render={() => <Index />} />
    </Router>
  )
}
