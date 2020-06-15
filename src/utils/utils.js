export const utils = {
	getUsers: params => {
		return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${params.page}&count=${params.count}`)
		.then(r => r.json())
		.then(d => {
			console.log(d)
			if(d.success){
				return d;
			}else{
				throw "Не получилось получить список пользователей";
			}
		})
	},
}