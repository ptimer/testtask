import React from 'react';

import './Home.scss'

import { Header, Navigation, PreviewBlock} from '../../components/index'

const Home = props => {
	return (
		<div className="container">
			<Header>
				<Navigation />
			</Header>
			<PreviewBlock />	
		</div>
	);
}

export default Home;
