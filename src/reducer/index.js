import { ADD_TODO } from './constants'

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      state.push(action.payload)
      return state
    default:
      return state
  }
}

export default reducer
