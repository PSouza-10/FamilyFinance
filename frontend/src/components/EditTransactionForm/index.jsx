import React, { useState, useContext } from 'react'
import { formatDate } from '../../utils/date'
import Input from '../UX/Input'
import Alert from '../UX/Alert'
import FormButton from '../UX/FormButton'

import { GlobalContext } from '../../Context'
import UploadPhoto from '../UX/UploadImage'

export default function EditTransactionForm({ history, transaction }) {
  const { members, editTransaction, err } = useContext(GlobalContext)
  const [transactionInfo, setTransactionInfo] = useState({
    ...transaction,
    date: formatDate(transaction.date)
  })

  const [file, setFile] = useState(transaction.imageSrc)

  const handleChange = ({ target }) => {
    setTransactionInfo({ ...transactionInfo, [target.name]: target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await editTransaction({
      ...transactionInfo,
      newImage: file
    })

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
      <FormButton type='submit'>Editar Transação</FormButton>
    </form>
  )
}
