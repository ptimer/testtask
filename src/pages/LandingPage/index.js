import React from 'react';

import './LandingPage.scss';

import { Header, 
	    BannerBlock, 
	    AboutMeBlock,
		UsersBlock,
		RegisterForm,
		Footer} from '../../components';

const LandingPage = props => {
	return (
		<React.Fragment>
			<Header />

			<div className="container">
				<BannerBlock />
				<AboutMeBlock />	
				<UsersBlock />
				<RegisterForm />
			</div>

			<Footer />
		</React.Fragment>
	);
}

export default LandingPage;
