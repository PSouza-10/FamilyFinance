import React, { useContext } from 'react'
import { GlobalContext } from '../../Context'
import Balance from '../../components/Balance'
import TransactionCard, { Cards } from '../../components/TransactionCard'
import AddTransaction from '../../components/AddTransaction'
import styled from 'styled-components'

const Error = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.fg};
  margin-top: 30px;
`

export default function Index({ theme, setTheme }) {
  const { transactions, spent, err, updateTransactions } = useContext(
    GlobalContext
  )
  navigator.serviceWorker.onmessage = ({ data }) => {
    const { type, body } = JSON.parse(data)
    if (type === 'Update Transactions') {
      updateTransactions(body)
    }
  }
  return (
    <>
      <Balance spent={`R$${spent}`} theme={theme} setTheme={setTheme} />
      <Error>{err}</Error>
      <Cards>
        {transactions.map(transaction => (
          <TransactionCard {...transaction} key={transaction._id} />
        ))}
      </Cards>
      <AddTransaction />
    </>
  )
}
