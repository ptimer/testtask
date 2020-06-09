import React from 'react';
import './UsersBlock.scss';

import { Button } from '../index'

const UsersBlock = ({children}) => (
	<div className="UsersBlock">
		<h2>Let's get acquainted</h2>
		<p>Attention! Sorting users by registration date</p>
		<div className="UsersBlock__users">
			{children}
		</div>

		<div className="UsersBlock__button">
			<Button text="Show more" />
		</div>
		
	</div>
);

export default UsersBlock;
