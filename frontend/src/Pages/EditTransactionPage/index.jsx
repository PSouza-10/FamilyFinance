import React, { useContext } from 'react'

import EditTransactionForm from '../../components/EditTransactionForm'
import { Container, Header, ReturnIcon } from './styles'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context'

export default function EditTransactionPage({ match, history }) {
  const { returnTransaction } = useContext(GlobalContext)

  return (
    <>
      <Header>
        <Link to={`/transaction/${match.params._id}`}>
          <ReturnIcon />
        </Link>
        <p> Editar Transação </p>
      </Header>
      <Container>
        <EditTransactionForm
          history={history}
          transaction={returnTransaction(match.params._id)}
        />
      </Container>
    </>
  )
}

/*
    Valor, Tipo, data(opcional = Date.now()), nome, descrição, imagem(nota fiscal) 
*/
