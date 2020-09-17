import React from 'react'

import { Container, CardWrapper } from './styles'

function TransactionCard({ _id, type, display_date, member, value }) {
  return (
    <Container to={`/transaction/${_id}`}>
      <p>
        <span>{display_date}</span>
        <span>{member}</span>
      </p>
      <p>
        <span>{type}</span>
        <span className='value'>R${value}</span>
      </p>
    </Container>
  )
}

export const Cards = ({ children }) => <CardWrapper>{children}</CardWrapper>

export default TransactionCard
