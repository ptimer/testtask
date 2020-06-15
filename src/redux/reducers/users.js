const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USERS:ADD':
      return [...state, ...payload]
    case 'USERS:CLEAN':
      return []
    default:
      return state
  }
}