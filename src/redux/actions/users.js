import { userApi } from '../../utils/api'
import store from '../store'

const Actions = {
	addUsers: data => ({ type: 'USERS:ADD', payload: data }),

	cleanUsers: _ => ({type: 'USERS:CLEAN'}),

	fetchUserRegister: formData => dispatch => {
		return userApi
		.getToken()
		.then(token => dispatch(Actions.setSignUp({formData: formData, token: token})))
		.then(_ => dispatch(Actions.cleanUsers()))
	},

	getUsers: data => () => {
	 	return userApi.getUsers(data)
	},
	getToken: _ => () => {
	 	return userApi.getToken()
	},

	setSignUp: data => () => {
		return userApi.signUp(data)
	},
}

export default Actions;