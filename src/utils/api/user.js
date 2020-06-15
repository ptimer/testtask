const usersLink = 'https://frontend-test-assignment-api.abz.agency/api/v1/users'

export default {
  signUp: postData => {fetch(usersLink, {
  	  method: 'POST',
  	  body: postData.formData,
  	  headers: {
  	    'Token': postData.token, // get token with GET api/v1/token method
  	  },
  	  
  	})
    .then(response => response.json())
    .then(data => data.success ? console.log('success') : postUsersError())
  },
  getUsers: params => fetch(`${usersLink}?page=${params.page}&count=${params.count}`)
		.then(response => response.json())
		.then(data => data.success ? data : getUsersError()),
};

function getUsersError(){
	throw 'Не получилось получить список пользователей'
}

function postUsersError(){
	throw 'Неудачная попытка добавить пользователя'
}