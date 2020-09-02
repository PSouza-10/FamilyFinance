import React from 'react'

import { Container, CardWrapper } from './styles'

function TransactionCard({ type, date, value }) {
  return (
    <Container>
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
