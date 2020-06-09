import React from 'react';
import './UsersBlock.scss';

import { Button } from '../index'

function UsersBlock ({children, handleClick, showButton}){

	return (<div className="UsersBlock">
			<h2>Let's get acquainted</h2>
			<p>Attention! Sorting users by registration date</p>
			<div className="UsersBlock__users">
				{children}
			</div>
			
			{ showButton ? <div className="UsersBlock__button"><Button text="Show more" onClick={handleClick} /></div> : '' }
			
		</div>)
};

export default UsersBlock;
