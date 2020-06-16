import { userApi } from '../../utils/api'
import {sortUsersByRegistration} from '../../utils'
import {registeredActions} from './'
import store from '../store'

const Actions = {
	addUsers: data => ({ type: 'USERS:ADD', payload: data }),

	cleanUsers: _ => ({type: 'USERS:CLEAN'}),

	fetchUserRegister: formData => dispatch => {
		return userApi
		.getToken()
		.then(token => dispatch(Actions.setSignUp({formData: formData, token: token})))
		.then(_ => dispatch(Actions.cleanUsers()))
		.then(_=>dispatch(registeredActions.setRegistered(true)))
		.then(_ => dispatch(Actions.getUsers('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')))
		.then(data => dispatch(Actions.addUsers([...sortUsersByRegistration(data.users)])))
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