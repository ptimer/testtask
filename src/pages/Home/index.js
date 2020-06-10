import React from 'react';

import './Home.scss';

import { Header, 
	    Navigation, 
	    PreviewBlock, 
	    AcquaintedBlock,
		UsersBlock,
		Footer} from '../../components';

import { UsersList, RegisterForm } from '../../modules';

const Home = props => {
	return (
		<React.Fragment>
			<Header>
					<Navigation />
			</Header>
			<div className="container">
				<PreviewBlock />
				<AcquaintedBlock />	
				<UsersList />
				<RegisterForm />
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
