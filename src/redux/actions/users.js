import { userApi } from '../../utils/api';

const Actions = {
	addUsers: data => ({
		type: 'USERS:ADD',
		payload: data
	}),

	fetchUserRegister: postData => dispatch => {
		return userApi
		.getToken()
		.then(data => dispatch(Actions.setSignUp(data)))
	},

	getUsers: data => () => {
	 	return userApi.getUsers(data)
	},

	getToken: data => () => {
	 	return userApi.getToken(data)
	},

	setSignUp: data => () => {
		return userApi.signUp(data);
	}

}

export default Actions;