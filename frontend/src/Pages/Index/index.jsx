import React, { useContext } from 'react'
import { GlobalContext } from '../../Context'
import Balance from '../../components/Balance'
import TransactionCard, { Cards } from '../../components/TransactionCard'
import AddTransaction from '../../components/AddTransaction'

export default function Index({ theme, setTheme }) {
  const { transactions, spent } = useContext(GlobalContext)

  return (
    <>
      <Balance spent={`R$${spent}`} theme={theme} setTheme={setTheme} />
      <Cards>
        {transactions.map(transaction => (
          <TransactionCard {...transaction} key={transaction._id} />
        ))}
      </Cards>
      <AddTransaction />
    </>
  )
}
