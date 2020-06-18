import React from 'react'
import classNames from 'classnames'
import LogoSvg from '../../assets/img/logo.svg'
import {DrawerButton} from '../'
import './Navigation.scss'

export default ({drawerHandler, className}) => (
	<nav className={classNames('nav', className)}>
		<img src={LogoSvg} className='header__logo' alt='logo' />
		<div className='spacer'></div>
		<div className='nav__items'>
			<ul>
				<li>
					<a className='active' href='#sign-up'>About me</a>
				</li>
				<li>
					<a href='#sign-up'>RelationShips</a>
				</li>
				<li>
					<a href='#sign-up'>Requirements</a>
				</li>
				<li>
					<a href='#sign-up'>Users</a>
				</li>
				<li>
					<a href='#sign-up'>Sign Up</a>
				</li>
			</ul>
		</div>
		<div className='nav__drawer-button'>
			<DrawerButton onClick={drawerHandler}/>
		</div>
	</nav>
);