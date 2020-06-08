import React from 'react';

import './Home.scss'

import { Header, 
	    Navigation, 
	    PreviewBlock, 
	    AcquaintedBlock} from '../../components/index'

const Home = props => {
	return (
		<React.Fragment>
			<Header>
					<Navigation />
			</Header>
			<div className="container">
				<PreviewBlock />
				<AcquaintedBlock />	
			</div>
		</React.Fragment>
	);
}

export default Home;
