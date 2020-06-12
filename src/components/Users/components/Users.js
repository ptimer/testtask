import React from 'react';

import UsersList from './List';
import UsersUser from './User';

import './Users.scss'


export default ({showMore, showButton, items, posted}) => {

	return (
			<div className="Users">
					<UsersList>
						{/*
							items.map(item => <UsersUser key={item.id} user={{img: item.photo,
																	name: item.name, 
																	phone: item.phone, 
																	position: item.position, 
																	email: item.email}} />)
						*/}
					</UsersList>
			</div>
	)
}