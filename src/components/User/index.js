import React, {useState, Fragment} from 'react'
import classNames from 'classnames'
import photoCoverSvg from '../../assets/img/photo-cover.svg'
import './User.scss'

export default ({user, className}) => {
	/*Переменная для того, чтобы изменить изображение на дефолтное
	в onError, если его нет по запросу */
	const [photo, setPhoto] = useState(user.photo)

	return (
		<div className={classNames('user', className)}>
		{console.log( user.photo) }
			{user && 
				<Fragment>
					<img src={photo} onError={_ => setPhoto(photoCoverSvg)} alt={user.name}/>
					 <h3 className='user__name'>{user.name}</h3>
					 <span className='user__position'>{user.position}</span>
					 {/* Ставим три точки и тултип, если email больше 20 символов */}
					 <span className={classNames('user__email', {'user__tooltip': user.email.length > 20})}>
					 	{user.email.length > 20 ? `${user.email.substring(0, 20)}...` : user.email}
						{user.email.length > 20 ? <span className='user__tooltip_text'>{user.email}</span> : null}
					 </span>
					 <span className='user__phone'>{user.phone}</span>
				</Fragment>}
		</div>)
}