import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Users as UsersList } from '../components'
import { usersActions, registeredActions } from '../redux/actions'
import store from '../redux/store'
import {sortUsersByRegistration} from '../utils'

const Users = ({users, registered}) => {
	const [nextUrl, setNextUrl] = useState(null)
	const link = 'https://frontend-test-assignment-api.abz.agency/api/v1/'

	const getUsers = _ => {
		store
		.dispatch(usersActions.getUsers(nextUrl))
		.then(data => {
			store.dispatch(usersActions.addUsers([...sortUsersByRegistration(data.users)]))
			setNextUrl(data.links.next_url)
		})
	}

	useEffect(_ => {
		if(registered){
			setNextUrl(`${link}users?page=2&count=6`)
			store.dispatch(registeredActions.setRegistered(false))
		}
	})

	useEffect(_ => {
		store
		.dispatch(usersActions.getUsers(`${link}users?page=1&count=6`))
		.then(data => {
			store.dispatch(usersActions.addUsers([...sortUsersByRegistration(data.users)]))
			setNextUrl(data.links.next_url)
		})
	},[])

	return <UsersList users={users} showMore={getUsers} showButton={nextUrl != null} />
}

export default connect(
	({ users, registered }) => ({users, registered})
)(Users)