import React, {useState, useEffect} from 'react'

import Users from '../components/Users'

export default props => {
	const [users, setUsers] = useState([])
	const [totalPages, setTotalPages] = useState(0)
	const [page, setPage] = useState(1)


	useEffect(_ => {
		Utils.getUsers({count: 6, page: page}).then(d => {setUsers([...users, ...d.users]); setTotalPages(d.total_pages);})
	}, [page])

	return (
		<Users users={ users } showMore={_=> setPage(prev => prev + 1)} showButton = {page < totalPages}
			 />
	)
}

const Utils = {
	getUsers: params => {
		return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${params.page}&count=${params.count}`)
		.then(r => r.json())
		.then(d => {
			if(d.success){
				return d;
			}else{
				throw "Не получилось получить список пользователей";
			}
		})
	},
}