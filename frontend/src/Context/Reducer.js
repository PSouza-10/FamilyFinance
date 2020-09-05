import { GET, POST, DELETE, ERR } from './types'

export const initialState = {
  members: [
    'Paulo Henrique de Souza',
    'Rosana dos Santos',
    'Paulo Rogério de Souza'
  ],
  transactions: [],
  err: ''
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET:
      return {
        ...state,
        transactions: payload
      }
    case POST:
      return {
        ...state,
        transactions: [...state.transactions, payload]
      }

    case DELETE:
      const newArr = state.transactions.filter(({ _id }) => _id !== payload)
      return {
        ...state,
        transactions: newArr
      }
    case ERR:
      return {
        ...state,
        err: payload
      }
    default:
      return state
  }
}
