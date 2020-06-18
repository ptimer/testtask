import React from 'react'
import classNames from 'classnames'
import './SideDrawer.scss'
import LogoSvg from '../../assets/img/logo.svg'

export default ({visible}) => (
	<nav className={classNames('side-drawer', {'open': visible})}>
		<img src={LogoSvg} className='side-drawer__logo' alt='logo' />
		<div className='side-drawer__section'>
			<ul>
				<li>
					<a className='active' href='#sign-up'>About me</a>
				</li>
				<li>
					<a href='#sign-up'>RelationShips</a>
				</li>
				<li>
					<a href='#sign-up'>Users</a>
				</li>
				<li>
					<a href='#sign-up'>Sign Up</a>
				</li>
				<li>
					<a href='#sign-up'>Terms and Conditions</a>
				</li>
			</ul>
		</div>
		<div className='side-drawer__section'>
			<ul>
				<li>
					<a href='#sign-up'>How it works</a>
				</li>
				<li>
					<a href='#sign-up'>Partnership</a>
				</li>
				<li>
					<a href='#sign-up'>Help</a>
				</li>
				<li>
					<a href='#sign-up'>Leave testimonial</a>
				</li>
				<li>
					<a href='#sign-up'>Contact us</a>
				</li>
			</ul>
		</div>
		<div className='side-drawer__section'>
			<ul>
				<li>
					<a href='#sign-up'>Articles</a>
				</li>
				<li>
					<a href='#sign-up'>Our news</a>
				</li>
				<li>
					<a href='#sign-up'>Testimonials</a>
				</li>
				<li>
					<a href='#sign-up'>Licenses</a>
				</li>
				<li>
					<a href='#sign-up'>Privacy Policy</a>
				</li>
			</ul>
		</div>
	</nav>
)