const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USERS:ADD':
      return [...state, ...payload]
    default:
      return state
  }
}