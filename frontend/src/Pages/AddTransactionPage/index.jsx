import React from 'react'

import AddTransactionForm from '../../components/AddTransactionForm'
import { Container, Header, ReturnIcon } from './styles'
import { Link } from 'react-router-dom'

export default function AddTransaction({ history }) {
  return (
    <>
      <Header>
        <Link to='/'>
          <ReturnIcon />
        </Link>
        <p> Realizar Transação </p>
      </Header>
      <Container>
        <AddTransactionForm history={history} />
      </Container>
    </>
  )
}

/*
    Valor, Tipo, data(opcional = Date.now()), nome, descrição, imagem(nota fiscal) 
*/
