import React, { useState, useContext } from 'react'

import Alert from '../UX/Alert'
import Input from '../UX/Input'
import FormButton from '../UX/FormButton'
import UploadPhoto from '../UX/UploadImage'
import { GlobalContext } from '../../Context'

const initDate = () => {
  const now = new Date()

  now.setHours(now.getHours() - 3)

  return now.toISOString().substring(0, 16)
}

export default function AddTransactionForm({ history }) {
  const { members, addTransaction, err } = useContext(GlobalContext)
  const [transactionInfo, setTransactionInfo] = useState({
    value: 0,
    type: '',
    member: members[0],
    date: initDate(),
    description: ''
  })

  const [file, setFile] = useState('')
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
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Alert show={err} color={err !== 'Enviando...' ? 'red' : 'theme'}>
        {err}
      </Alert>
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
      <FormButton type='submit'>Adicionar Transação</FormButton>
    </form>
  )
}
