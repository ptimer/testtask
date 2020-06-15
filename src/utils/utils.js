const usersLink = 'https://frontend-test-assignment-api.abz.agency/api/v1/users'

export const utils = {
	getUsers: params => fetch(`${usersLink}?page=${params.page}&count=${params.count}`)
		.then(response => response.json())
		.then(data => data.success ? data : getUsersError()),

	sortUsersByRegistration: obj => obj.sort((a, b) => b.registration_timestamp - a.registration_timestamp),

	postUsers: params => fetch(usersLink, {
	  method: 'POST',
	  body: params.formData,
	  headers: {
	    'Token': params.token, // get token with GET api/v1/token method
	  },
	  
	})
	.then(response => response.json())
	.then(data => data.success ? console.log('success') : postUsersError())
}

function getUsersError(){
	throw 'Не получилось получить список пользователей'
}

function postUsersError(){
	throw 'Неудачная попытка добавить пользователя'
}