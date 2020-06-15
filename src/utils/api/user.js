const APILINK = 'https://frontend-test-assignment-api.abz.agency/api/v1'

export default {
  signUp: data => fetch(`${APILINK}/users`, {
  	  method: 'POST',
  	  body: data.formData,
  	  headers: {
  	    'Token': data.token, // get token with GET api/v1/token method
  	  },
  	  
  	})
    .then(response => response.json())
    .then(data => data.success ? true : postUsersError()),

  getToken: _ => fetch(`${APILINK}/token`)
    .then(response => response.json())
    .then(data => data.success ? data.token : getTokenError()),

  getUsers: params => fetch(`${APILINK}/users?page=${params.page}&count=${params.count}`)
		.then(response => response.json())
		.then(data => data.success ? data : getUsersError()),
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