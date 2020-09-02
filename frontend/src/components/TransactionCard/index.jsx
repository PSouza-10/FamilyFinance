import React from 'react'

import { Container, CardWrapper } from './styles'

function TransactionCard({ _id, type, date, value }) {
  return (
    <Container to={`/transaction/${_id}`}>
      <p>{date}</p>
      <p>
        <span>{type}</span>
        <span>R${value}</span>
      </p>
    </Container>
  )
}

export const Cards = ({ children }) => <CardWrapper>{children}</CardWrapper>

export default TransactionCard
