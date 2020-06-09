import React from 'react';

import './Home.scss';

import { Header, 
	    Navigation, 
	    PreviewBlock, 
	    AcquaintedBlock,
		UsersBlock} from '../../components/index';

import { UsersList, RegisterForm } from '../../modules/index';

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
		</React.Fragment>
	);
}

export default Home;
