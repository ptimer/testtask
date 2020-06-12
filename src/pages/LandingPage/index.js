import React from 'react';

import './LandingPage.scss';

import { Header, 
	    Banner, 
	    AboutMe,
		Users,
		Register,
		Footer} from '../../components';

const LandingPage = props => {
	return (
		<React.Fragment>
			<Header />

			<Container />
			
			<Footer />
		</React.Fragment>
	);
}

const Container = _ => (
	<div className="container">
		<Banner />
		<AboutMe />	
		<Users />
		<Register />
	</div>
)

export default LandingPage;
