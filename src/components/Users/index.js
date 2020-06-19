import React, {useState, useEffect} from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import './Users.scss'
import { Button, List, User } from '../'

const Users = ({showButton, users, showMore, className}) => {
	return (
		<div className={classNames('users', className)}>
			<h2 className='users__title'>Our cheerful users</h2>
	 		<p className='users__description'>Attention! Sorting users by registration date</p>
			<List> {users && users.map(user => <User key={user.id} user={user} />)} </List>	
			<div className='users__button'> {showButton ? <Button onClick={showMore}>Show more</Button> : ''} </div>
		</div>
	)
}

Users.propTypes = {
	users: propTypes.array,
	showMore: propTypes.func,
	showButton: propTypes.bool,
}

export default Users;