import React from 'react';

import UsersList from './UsersList/index';
import User from './User/index';


export default ({showMore, showButton, items, posted}) => {

	return (
			<div className="UsersBlock">
					<UsersList>
						{/*
							items.map(item => <User key={item.id} user={{img: item.photo,
																	name: item.name, 
																	phone: item.phone, 
																	position: item.position, 
																	email: item.email}} />)
						*/}
					</UsersList>
			</div>
	)
}