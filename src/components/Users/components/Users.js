import React, {useState, useEffect, Fragment} from 'react'
import propTypes from 'prop-types'
import './Users.scss'
import { Button } from '../../UI'
import List from './List'
import User from './User'


export default function Users({showButton, users, showMore}){
	return (
		<div className="Users">
			<Text />
			<List> {users && users.map(user => <User key={user.id} user={user} />)} 
			</List>	
			<div className="Users__button">
				{showButton ? <Button onClick={showMore}>Show more</Button> : ''}
			</div>
		</div>
	)
}

Users.propTypes = {
	users: propTypes.array,
	showMore: propTypes.func,
	showButton: propTypes.bool,
}

const Text = _ => (
	<Fragment>
		<h2 class="Users__title">Let's get acquainted</h2>
	 	<p class="Users__description">Attention! Sorting users by registration date</p>
	</Fragment>
)