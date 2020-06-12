import React from 'react';
import './UsersList.scss';

import { Button } from '../../../GenericComponents/index'

export default function UsersList ({children}){

	return (
		<div className="UsersList">
			<h2>Let's get acquainted</h2>
			<p>Attention! Sorting users by registration date</p>
			<div className="UsersList__users">
				{children}
			</div>
			
			<div className="UsersList__button">
				<Button text="Show more" />
			</div>
			
		</div>
	)
};