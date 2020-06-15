import { userApi } from '../../utils/api'
import store from '../store'

const Actions = {
	addUsers: data => ({ type: 'USERS:ADD', payload: data }),

	cleanUsers: _ => ({type: 'USERS:CLEAN'}),

	FormIsSubmit: _ => {
		store.dispatch(Actions.cleanUsers())
		store.dispatch(Actions.getUsers({page: 1, count: 6}))
		.then(data => store.dispatch(Actions.addUsers(data.users)));
	},

	fetchUserRegister: formData => dispatch => {
		return userApi
		.getToken()
		.then(token => dispatch(Actions.setSignUp({formData: formData, token: token})))
		.then(success => success == true ? dispatch(Actions.FormIsSubmit) : console.log('Error in fetchUserRegister'))
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