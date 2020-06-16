import React from 'react';

import './LandingPage.scss';

import {Header, Banner, AboutMe, Footer} from '../../components';
import {Users, Register, Modal} from '../../containers';


export default _ => {
	return (
		<React.Fragment>
			<Header />
			<div className="container">
				<Banner />
				<AboutMe />	
				<Users />
				<Register />
				<Modal />
			</div>
			<Footer />
		</React.Fragment>
	);
}