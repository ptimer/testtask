export const utils = {
	getUsers: params => fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${params.page}&count=${params.count}`)
		.then(r => r.json())
		.then(d => d.success ? d : error()),
	sortUsersByRegistration: obj => obj.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
}

const error = _ => {
	throw 'Не получилось получить список пользователей'
}