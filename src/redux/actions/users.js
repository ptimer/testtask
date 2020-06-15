import { userApi } from '../../utils/api';

const Actions = {
	addUsers: data => ({
		type: 'USERS:ADD',
		payload: data
	}),

	fetchUserRegister: formData => dispatch => {
		return userApi
		.getToken()
		.then(token => dispatch(Actions.setSignUp({formData: formData, token: token})))
	},

	getUsers: data => () => {
	 	return userApi.getUsers(data)
	},

	getToken: _ => () => {
	 	return userApi.getToken()
	},

	setSignUp: data => () => {
		return userApi.signUp(data)
	}

}

export default Actions;