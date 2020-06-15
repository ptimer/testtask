const usersLink = 'https://frontend-test-assignment-api.abz.agency/api/v1/users'

export default {
  signUp: data => fetch(usersLink, {
  	  method: 'POST',
  	  body: data.formData,
  	  headers: {
  	    'Token': data.token, // get token with GET api/v1/token method
  	  },
  	  
  	})
    .then(response => response.json())
    .then(data => data.success ? console.log('success') : postUsersError()),

  getToken: _ => fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(response => response.json())
    .then(data => data.success ? data : getTokenError()),

  getUsers: params => fetch(`${usersLink}?page=${params.page}&count=${params.count}`)
		.then(response => response.json())
		.then(data => data.success ? data.token : getUsersError()),
};

function getUsersError(){
	throw 'Не получилось получить список пользователей'
}

function postUsersError(){
	throw 'Неудачная попытка добавить пользователя'
}

function getTokenError(){
  throw 'Не удалось получить токен'
}