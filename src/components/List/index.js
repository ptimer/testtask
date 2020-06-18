import React from 'react';
import classNames from 'classnames'
import './List.scss';

export default ({children, className}) => {
	return (
		<div className={classNames('list', className)}>
			<div className='list__users'>
				{children}
			</div>			
		</div>
	)
};