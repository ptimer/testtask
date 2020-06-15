import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Users as UsersList } from '../components'
import { usersActions } from '../redux/actions'
import store from '../redux/store'
import {sortUsersByRegistration} from '../utils'

const Users = ({addUsers, users}) => {
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [totalUsers, setTotalUsers] = useState(0)

	useEffect(_ => {
		store
		.dispatch(usersActions.getUsers(({count: 6, page: page})))
		.then(data => {
			addUsers([...sortUsersByRegistration(data.users)])
			setTotalPages(data.total_pages)
			setTotalUsers(data.total_users)
		})
	}, [page])

	useEffect(_ => {
		if(users <= 6){
			setPage(1)
		}
	})

	return <UsersList users={ users } showMore={_=> {setPage(prev => prev + 1)}} showButton = {users.length < totalUsers} />
}

export default connect(
	({ users }) => ({users}),
	usersActions
)(Users)