import React from 'react';
import { UsersBlock, User } from '../../../components';


export default ({showMore, showButton, items}) => {

	return (
			<div className="UsersList">
					<UsersBlock handleClick={(e) => showMore(e)} showButton={showButton}>
						{
							items.map(item => <User key={item.id} user={{img: item.photo,
																	name: item.name, 
																	phone: item.phone, 
																	position: item.position, 
																	email: item.email}} />)
						}
					</UsersBlock>
			</div>
	)
}