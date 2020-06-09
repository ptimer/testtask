import React from 'react';

import { UsersBlock, User } from '../../../components/index';

class UsersList extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			items: [],
			isLoaded: false
		}
	}

	componentDidMount(){
		fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
		.then(function(response) {
		 return response.json();
		})
		.then(data => {
			console.log(data);
			 if(data.success) {
			   this.setState({items: data.users})
			 } else {
			   // proccess server errors
			 }
		})
	}

	render(){
		return (
			<div className="UsersList">
					<UsersBlock>
						{
							this.state.items
							.map(item => <User key={item.id} user={{img: item.photo,
																	name: item.name, 
																	phone: item.phone, 
																	position: item.position, 
																	email: item.email}} />)
						}
					</UsersBlock>
			</div>
		)
	}
}

export default UsersList;
