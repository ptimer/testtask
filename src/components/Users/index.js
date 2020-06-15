import React, {useState, useEffect} from 'react'
import propTypes from 'prop-types'
import './Users.scss'
import { Button, List, User } from '../'

const Users = ({showButton, users, showMore}) => {
	return (
		<div className="Users">
			<h2 className="Users__title">Let's get acquainted</h2>
	 		<p className="Users__description">Attention! Sorting users by registration date</p>
			<List> {users && users.map(user => <User key={user.id} user={user} />)} </List>	
			<div className="Users__button"> {showButton ? <Button onClick={showMore}>Show more</Button> : ''} </div>
		</div>
	)
}

Users.propTypes = {
	users: propTypes.array,
	showMore: propTypes.func,
	showButton: propTypes.bool,
}

export default Users;