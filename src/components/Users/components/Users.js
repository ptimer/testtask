import React from 'react';
import propTypes from 'prop-types';

import { Button } from '../../UI'
import UsersList from './List';
import UsersUser from './User';

import './Users.scss'


export default function Users(props){

	return (
			<div className="Users">
					<h2 class="Users__title">Let's get acquainted</h2>
					<p class="Users__description">Attention! Sorting users by registration date</p>

					<UsersList>
						{
							props.users.map(item => <UsersUser key={item.id} user={{img: item.photo,
																							name: item.name, 
																							phone: item.phone, 
																							position: item.position, 
																							email: item.email}} />)
						}
					</UsersList>
					
					<div className="Users__button">
						<Button text="Show more" />
					</div>
			</div>
	)
}

Users.propTypes = {
	users: propTypes.array
}