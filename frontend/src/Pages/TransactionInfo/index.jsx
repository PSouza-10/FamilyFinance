import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Container,
  Description,
  Header,
  ReturnIcon,
  Title,
  TransactionImage,
  Value,
  DeleteIcon,
  EditIcon,
  Error
} from './styles'
import { GlobalContext } from '../../Context'

export default function TransactionInfo({ match }) {
  const { returnTransaction, deleteTransaction, err } = useContext(
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
  const [error, setError] = useState(false)
  const handleDelete = async _id => {
    const response = await deleteTransaction(_id)

    if (response !== 'ERROR') {
      history.push('/')
    } else {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <>
      <Header>
        <Link to='/'>
          <ReturnIcon />
        </Link>
        <p>{type}</p>
        <DeleteIcon onClick={() => handleDelete(_id)} />
        <Link to={`/edit/:${_id}`}>
          <EditIcon />
        </Link>
      </Header>
      <Container>
        <Error show={error}>{err}</Error>
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
