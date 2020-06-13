import React, {useState, useEffect} from 'react'

import Users from '../components/Users'

export default props => {
	const [users, setUsers] = useState([])

	useEffect(_ => {
		Utils.getUsers({count: 6}).then(d => setUsers(d.users));
	}, [])

	return (
		<Users users={users} />
	)
}

const Utils = {
	getUsers: params => {
		return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${params.count}`)
		.then(r => r.json())
		.then(d => {
			if(d.success){
				return d;
			}else{
				throw "Не получилось получить список пользователей";
			}
		})
	}
}