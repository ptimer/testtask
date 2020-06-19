import React, {Fragment} from 'react'
import classNames from 'classnames'
import photoCoverSvg from '../../assets/img/photo-cover.svg'
import './User.scss'

export default ({user, className}) => (
	<div className={classNames('user', className)}>
	{console.log( user.photo) }
		{user && <Fragment><img src={!user.photo ? photoCoverSvg : user.photo} alt={user.name}/>
				 <h3 className='user_name'>{user.name}</h3>
				 <span className='user__position'>{user.position}</span>
				 <span className={classNames('user__email', {'user__tooltip': user.email.length > 20})}>
				 	{user.email.length > 20 ? `${user.email.substring(0, 20)}...` : user.email}
					{user.email.length > 20 ? <span className='user__tooltip_text'>{user.email}</span> : null}
				 </span>
				 <span className='user__phone'>{user.phone}</span></Fragment>
	}
	</div>
);
