import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Container,
  Description,
  Header,
  Title,
  TransactionImage,
  Value,
  DeleteIcon,
  EditIcon
} from './styles'
import Alert from '../../components/UX/Alert'
import { GlobalContext } from '../../Context'
import ReturnButton from '../../components/UX/ReturnIcon'

export default function TransactionInfo({ match }) {
  const { returnTransaction, deleteTransaction, err, clearErrors } = useContext(
    GlobalContext
  )
  const history = useHistory()
  const {
    _id,
    value,
    member,
    date,
    type,
    description,
    imageSrc
  } = returnTransaction(match.params._id)

  const handleDelete = async delete_id => {
    const response = await deleteTransaction(delete_id)
    if (response !== 'ERROR') {
      history.push('/')
    } else {
      setTimeout(() => clearErrors(), 4000)
    }
  }

  return (
    <>
      <Header>
        <ReturnButton to='/' />
        <p>{type}</p>
        <DeleteIcon onClick={() => handleDelete(match.params._id)} />
        <Link to={`/edit/${_id}`}>
          <EditIcon />
        </Link>
      </Header>
      <Container>
        <Alert show={err} color={err !== 'Apagando...' ? 'red' : 'theme'}>
          {err}
        </Alert>
        <Title>
          <span>{member}</span>
          <span>{date}</span>
        </Title>
        <TransactionImage src={imageSrc} alt={type} />
        <Value>R${value}</Value>

        <Description>{description}</Description>
      </Container>
    </>
  )
}
