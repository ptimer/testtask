const initialState = false

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'REGISTERED:SET':
      return payload
    default:
      return state
  }
}