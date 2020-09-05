import React, { useState, useContext } from 'react'
import { Form, Button, Error } from './styles'
import Input from '../../components/Input'
import UploadPhoto from '../UploadImage'
import { GlobalContext } from '../../Context'
import { useHistory } from 'react-router-dom'

export default function AddTransactionForm() {
  const { members, addTransaction, err } = useContext(GlobalContext)
  const [transactionInfo, setTransactionInfo] = useState({
    value: 0,
    type: '',
    member: members[0],
    date: new Date().toISOString(),
    description: ''
  })
  const history = useHistory()
  const [file, setFile] = useState('')
  const [error, setError] = useState(false)
  const handleChange = ({ target }) => {
    setTransactionInfo({ ...transactionInfo, [target.name]: target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()

    const info = {
      ...transactionInfo,
      image: file
    }

    const response = await addTransaction(info)

    if (response !== 'ERROR') {
      history.push(`/transaction/${response}`)
    } else {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Error show={error}>{err}</Error>
      <Input
        inputProps={{
          type: 'number',
          placeholder: 'Insira o Valor',
          name: 'value',
          onChange: handleChange,
          value: transactionInfo.value
        }}
        fieldName='Valor'
      />
      <Input
        inputProps={{
          type: 'text',
          placeholder: 'Objetivo da Transação',
          value: transactionInfo.type,
          onChange: handleChange,
          name: 'type'
        }}
        fieldName='Tipo'
      />
      <Input
        inputProps={{
          type: 'select',
          placeholder: 'Quem realizou a transação?',
          value: transactionInfo.member,
          onChange: handleChange,
          name: 'member'
        }}
        fieldName='Nome'>
        {members.map(member => (
          <option value={member} key={member}>
            {member}
          </option>
        ))}
      </Input>
      <Input
        inputProps={{
          type: 'datetime-local',
          placeholder: 'Data',
          value: transactionInfo.date,
          onChange: handleChange,
          name: 'date'
        }}
        fieldName='Data(Opcional)'
      />
      <Input
        inputProps={{
          type: 'textarea',
          placeholder: 'Escreva uma descrição da compra....',
          name: 'description',
          value: transactionInfo.description,
          onChange: handleChange
        }}
        fieldName='Descrição (Opcional)'
      />
      <UploadPhoto file={file} setFile={setFile} />
      <Button type='submit'>Adicionar Transação</Button>
    </Form>
  )
}
