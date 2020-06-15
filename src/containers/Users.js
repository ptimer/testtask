import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Users as UsersList } from '../components'
import { usersActions } from '../redux/actions'
import store from '../redux/store'
import Utils from '../utils'

const Users = ({addUsers, users}) => {
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)

	useEffect(_ => {
		store
		.dispatch(usersActions.getUsers(({count: 6, page: page})))
		.then(d => {
			addUsers([...Utils.sortUsersByRegistration(d.users)])
			setTotalPages(d.total_pages)
		})
	}, [page])

	return <UsersList users={ users } showMore={_=> setPage(prev => prev + 1)} showButton = {page < totalPages} />
}

export default connect(
	({ users }) => ({users}),
	usersActions
)(Users)