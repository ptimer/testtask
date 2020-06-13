import React from 'react';
import './List.scss';

export default function List ({children}){

	return (
		<div className="list">
			<div className="list__users">
				{children}
			</div>			
		</div>
	)
};