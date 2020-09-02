import React from 'react'
import { getTransaction } from '../../placeholder/transaction'
import { Link } from 'react-router-dom'
import { Container, Description, Header, ReturnIcon } from './styles'

export default function TransactionInfo({ match }) {
  const transaction = getTransaction(match.params._id)

  return (
    <>
      <Header>
        <Link to='/'>
          <ReturnIcon />
        </Link>
        <p>{transaction.type}</p>
      </Header>
      <Container>
        <div>
          <span>Valor:</span>
          <span>R${transaction.value}</span>
        </div>
        <div>
          <span>Data:</span>
          <span>{transaction.date}</span>
        </div>

        <Description>{transaction.description}</Description>
      </Container>
    </>
  )
}
