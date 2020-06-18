import React, {Fragment} from 'react'
import classNames from 'classnames'
import './User.scss'

export default ({user, className}) => (
	<div className={classNames('user', className)}>
		{user && <Fragment><img src={user.photo} alt={user.name}/>
				 <h3 className='user_name'>{user.name}</h3>
				 <span className='user__position'>{user.position}</span>
				 <span className='user__email'>{user.email}</span>
				 <span className='user__phone'>{user.phone}</span></Fragment>}
	</div>
);
