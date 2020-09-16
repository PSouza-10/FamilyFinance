import React, { createContext, useReducer, useEffect, useState } from 'react'

import Reducer, { initialState } from './Reducer'
import { GET, POST, DELETE, ERR, PUT, UPDATE, SET_THEME } from './types'
import axios from 'axios'
import { setItem } from '../utils/localStorage'

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    actions.getTransactions() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [spent, setSpent] = useState(0)
  useEffect(() => {
    let newSpent = 0

    state.transactions.map(({ value }) => (newSpent += value))

    setSpent(newSpent)
  }, [state.transactions])

  function returnTransaction(requested_id) {
    const returnValue =
      state.transactions.find(({ _id }) => _id === requested_id) || {}

    return returnValue
  }
  function clearErrors() {
    dispatch({
      type: ERR,
      payload: ''
    })
  }
  const actions = {
    async getTransactions() {
      dispatch({
        type: ERR,
        payload: 'Carregando...'
      })
      try {
        const { data } = await axios.get('/api/transactions')
        clearErrors()
        dispatch({
          type: GET,
          payload: data
        })
      } catch (err) {
        dispatch({
          type: ERR,
          payload: err.response
        })
      }
    },
    async editTransaction(changes) {
      dispatch({
        type: ERR,
        payload: 'Enviando...'
      })
      try {
        const { data } = await axios.put(
          `/api/${changes._id}`,
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
        clearErrors()
        return data._id
      } catch (err) {
        dispatch({
          type: ERR,
          payload: err.response
            ? err.response.data
            : 'Falha na conexão com o servidor'
        })
        await setTimeout(() => clearErrors(), 4000)
        return 'ERROR'
      }
    },
    async deleteTransaction(_id) {
      dispatch({
        type: ERR,
        payload: 'Apagando...'
      })
      try {
        const { data } = await axios.delete(`/api/${_id}`)

        dispatch({
          type: DELETE,
          payload: data
        })
        clearErrors()
        return 'SUCCESS'
      } catch (err) {
        dispatch({
          type: ERR,
          payload: err.response.data
        })
        await setTimeout(() => clearErrors(), 4000)
        return 'ERROR'
      }
    },

    async addTransaction(info) {
      dispatch({
        type: ERR,
        payload: 'Enviando...'
      })
      try {
        const { data } = await axios.post(`/api`, JSON.stringify(info), {
          headers: {
            'Content-Type': 'Application/json'
          }
        })

        dispatch({
          type: POST,
          payload: data
        })
        clearErrors()
        return data._id
      } catch (err) {
        dispatch({
          type: ERR,
          payload: err.response
            ? err.response.data
            : 'Falha na conexão com o servidor'
        })
        await setTimeout(() => clearErrors(), 4000)
        return 'ERROR'
      }
    },

    async updateTransactions(transactions) {
      dispatch({
        type: UPDATE,
        payload: transactions
      })
    },

    setTheme(newTheme) {
      dispatch({
        type: SET_THEME,
        payload: newTheme
      })
      setItem('theme', newTheme)
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        spent: spent,
        members: state.members,
        err: state.err,
        theme: state.theme,
        returnTransaction,
        clearErrors,
        ...actions
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
