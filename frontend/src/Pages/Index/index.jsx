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

export default function Index() {
  const { transactions, spent, theme, setTheme, err } = useContext(
    GlobalContext
  )

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
