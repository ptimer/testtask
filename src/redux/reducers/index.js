import { combineReducers } from 'redux'

const reducers = ['users', 'registered']

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default
    return initial
  }, {})
)