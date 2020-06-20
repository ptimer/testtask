import React from 'react'
import classNames from 'classnames'
import './SideDrawer.scss'
import {splitToChunks} from '../../utils'
import LogoSvg from '../../assets/img/logo.svg'

export default ({visible, linkClicked}) => (
	<nav className={classNames('side-drawer', {'open': visible})}>
		<img src={LogoSvg} className='side-drawer__logo' alt='logo' />
		{/* Разбиваем на массив ссылок на чанки, чтобы вывести по отдельным блокам каждые 5 ссылок */}
		{splitToChunks(links, 5).map((group, index) => {
			return (<div className='side-drawer__section' key={index}>
				<ul>
					{group.map(link => 
						(<li key={link.id}>
							<a className={link.txt == 'About me' ? 'active' : null} 
							onClick={linkClicked} 
							href={link.to}>{link.txt}</a>
						</li>)
					)}
				</ul>
			</div>)
		})}
	</nav>
)

const links = [
	{type: 'link', id: 1, to: '#sign-up', txt: 'About me'},
	{type: 'link', id: 2, to: '#sign-up', txt: 'RelationShips'},
	{type: 'link', id: 3, to: '#sign-up', txt: 'Users'},
	{type: 'link', id: 4, to: '#sign-up', txt: 'Sign Up'},
	{type: 'link', id: 5, to: '#sign-up', txt: 'Terms and Conditions'},
	{type: 'link', id: 6, to: '#sign-up', txt: 'How it works'},
	{type: 'link', id: 7, to: '#sign-up', txt: 'Partnership'},
	{type: 'link', id: 8, to: '#sign-up', txt: 'Help'},
	{type: 'link', id: 9, to: '#sign-up', txt: 'Leave testimonial'},
	{type: 'link', id: 10, to: '#sign-up', txt: 'Contact us'},
	{type: 'link', id: 11, to: '#sign-up', txt: 'Articles'},
	{type: 'link', id: 12, to: '#sign-up', txt: 'Our news'},
	{type: 'link', id: 13, to: '#sign-up', txt: 'Testimonials'},
	{type: 'link', id: 14, to: '#sign-up', txt: 'Licenses'},
	{type: 'link', id: 15, to: '#sign-up', txt: 'Privacy Policy'},
]