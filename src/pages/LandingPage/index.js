import React from 'react'

import './LandingPage.scss'

import {Banner, AboutMe, Footer} from '../../components'
import {Users, Register, Modal, Header} from '../../containers'


export default _ => {
	return (
		<React.Fragment>
			<div className='container'>
				<Header/>
				<Banner className='banner'/>
				<AboutMe className='about-me'/>	
				<Users className='users'/>
				<Register className='register'/>
				<Modal/>	
			</div>
			<Footer/>
		</React.Fragment>
	);
}