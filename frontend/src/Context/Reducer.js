import { GET, POST, DELETE, ERR, PUT, UPDATE } from './types'

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
    case UPDATE:
      return {
        ...state,
        transactions: payload
      }
    case POST:
      return {
        ...state,
        transactions: [...state.transactions, payload]
      }
    case PUT:
      return {
        ...state,
        transactions: returnUpdatedTransaction(state.transactions, payload)
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

function returnUpdatedTransaction(transactions, changed) {
  let selectedIndex

  transactions.map((obj, index) => {
    if (obj._id === changed._id) {
      selectedIndex = index
    }
    return null
  })

  let newArr = [...transactions]

  newArr[selectedIndex] = changed
  return newArr
}
