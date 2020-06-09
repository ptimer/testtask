import React, {useState, useEffect} from 'react';

import UsersList from '../components/UsersList';

export default function(props){
	const [items, setItems] = useState([]);
	const [showedItems, setShowedItems] = useState(6);
	const [limit, setLimit] = useState(6);
	const [offset, setOffset] = useState(1);
	const [showButton, setShowButton] = useState(true);
	const [totalUsers, setTotalUsers] = useState(0);
			
	useEffect(() => {
		fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${offset}&count=${limit}`)
		.then(function(response) {
		 return response.json();
		})
		.then(data => {
			console.log(data);
			 if(data.success) {
			   let users = data.users.sort((a,b) => b.registration_timestamp- a.registration_timestamp)
			   setItems(users);
			   setTotalUsers(data.total_users);
			 } else {
			   // proccess server errors
			 }
		})
	}, [])



	function showMore(e){

		setLimit(limit + showedItems)
		let localLimit = limit + showedItems;

		if(totalUsers % localLimit >= totalUsers){
			setShowButton(false);
		}

		fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${offset}&count=${localLimit}`)
		.then(function(response) {
		 return response.json();
		})
		.then(data => {
			console.log(data);
			 if(data.success) {
			   setItems(data.users);
			 } else {
			   // proccess server errors
			 }
		})
	}

	return <UsersList showMore={showMore} showButton={showButton} items={items} />
} 