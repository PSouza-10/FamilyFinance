import React, { useContext } from 'react'

import EditTransactionForm from '../../components/EditTransactionForm'
import { Container, Header } from './styles'
import ReturnButton from '../../components/UX/ReturnIcon'
import { GlobalContext } from '../../Context'

export default function EditTransactionPage({ match, history }) {
  const { returnTransaction } = useContext(GlobalContext)

  return (
    <>
      <Header>
        <ReturnButton to={`/transaction/${match.params._id}`} />
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
