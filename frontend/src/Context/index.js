import React, { createContext, useReducer, useEffect, useState } from 'react'
import Reducer, { initialState } from './Reducer'
import { GET, POST, DELETE, ERR } from './types'
import axios from 'axios'

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  const [spent, setSpent] = useState(0)
  useEffect(() => {
    let newSpent = 0

    state.transactions.map(({ value }) => (newSpent += value))

    setSpent(newSpent)
  }, [state.transactions])
  useEffect(() => {
    getTransactions()
  }, [])
  async function getTransactions() {
    console.log('function called')
    try {
      const { data } = await axios.get('/')

      dispatch({
        type: GET,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: ERR,
        payload: 'Unable to get transactions from server.'
      })
    }
  }

  async function deleteTransaction(_id) {
    try {
      const { data } = await axios.delete(`/${_id}`)

      dispatch({
        type: DELETE,
        payload: data
      })

      return 'SUCCESS'
    } catch (err) {
      dispatch({
        type: ERR,
        payload: 'Unable to delete transaction.'
      })
      return 'ERROR'
    }
  }

  async function addTransaction(info) {
    try {
      const { data } = await axios.post(`/`, JSON.stringify(info), {
        headers: {
          'Content-Type': 'Application/json'
        }
      })

      dispatch({
        type: POST,
        payload: data
      })

      return data._id
    } catch (err) {
      console.log(err)
      dispatch({
        type: ERR,
        payload: 'Erro de Validação: Preencha os campos necessários'
      })

      return 'ERROR'
    }
  }

  function returnTransaction(requested_id) {
    return state.transactions.find(({ _id }) => _id === requested_id) || {}
  }

  function clearError() {
    dispatch({
      type: ERR,
      payload: ''
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        spent: spent,
        members: state.members,
        err: state.err,
        getTransactions,
        addTransaction,
        deleteTransaction,
        clearError,
        returnTransaction
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
