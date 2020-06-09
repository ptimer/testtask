import React, {useState, useEffect} from 'react';

import RegisterForm from '../components/RegisterForm';

export default (props) => {

	const [positions, setPositions] = useState([]);

	useEffect(() => {
			fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
			.then(function(response) {
			 return response.json();
			})
			.then(data => {
				 if(data.success) {
				   setPositions(data.positions);
				 } else {
				   // proccess server errors
				 }
			})
	}, [])

	return (
		<RegisterForm positions={positions}/>
	)
}