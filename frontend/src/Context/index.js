import React, { createContext, useReducer, useEffect, useState } from 'react'
import Reducer, { initialState } from './Reducer'
import { GET, POST, DELETE, ERR, PUT } from './types'
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
    try {
      const { data } = await axios.get('/')

      dispatch({
        type: GET,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: ERR,
        payload: err.response
          ? err.response.data
          : 'Falha na conexão com o servidor'
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
        payload: err.response.data
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
      dispatch({
        type: ERR,
        payload: err.response
          ? err.response.data
          : 'Falha na conexão com o servidor'
      })

      return 'ERROR'
    }
  }

  async function editTransaction(changes) {
    try {
      const { data } = await axios.put(
        `/${changes._id}`,
        JSON.stringify(changes),
        {
          headers: {
            'Content-Type': 'Application/json'
          }
        }
      )

      dispatch({
        type: PUT,
        payload: data
      })

      return data._id
    } catch (err) {
      dispatch({
        type: ERR,
        payload: err.response
          ? err.response.data
          : 'Falha na conexão com o servidor'
      })

      return 'ERROR'
    }
  }

  function returnTransaction(requested_id) {
    return state.transactions.find(({ _id }) => _id === requested_id) || {}
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
        editTransaction,

        returnTransaction
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
