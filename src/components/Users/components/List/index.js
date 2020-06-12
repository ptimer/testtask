import React from 'react';
import './List.scss';

import { Button } from '../../../UI'

export default function List ({children}){

	return (
		<div className="list">
			<h2>Let's get acquainted</h2>
			<p>Attention! Sorting users by registration date</p>
			<div className="list__users">
				{children}
			</div>
			
			<div className="list__button">
				<Button text="Show more" />
			</div>
			
		</div>
	)
};