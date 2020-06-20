import { combineReducers } from 'redux'
/* Чтобы не импортировать каждый редюсер в отдельной строке, проходимся циклом */
const reducers = ['users', 'registered']

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default
    return initial
  }, {})
)