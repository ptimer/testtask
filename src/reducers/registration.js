import { SET_POSTED } from '../actions/index'

const initialState = {posted: false}

const registration = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTED':
      console.log('payload______: ' + action.payload.posted)
      return { ...state, posted: action.payload.posted };
    default:
      return state
  }
}

export default registration