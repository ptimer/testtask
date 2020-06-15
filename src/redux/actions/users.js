import { userApi } from '../../utils/api';

const Actions = {
	addUsers: data => ({
		type: 'USERS:ADD',
		payload: data
	}),

	fetchUserRegister: postData => {
		return userApi.signUp(postData);
	},

	getUsers: data => {
		return userApi.getUsers(data);
	},
}

export default Actions;