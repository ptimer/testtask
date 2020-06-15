import React from 'react';
import './Navigation.scss'

export default props => (
	<nav className="nav">
		<ul>
			<li>
				<a className="active" href="http://localhost:3000/?name=&email=&phone=&photo=">About me</a>
			</li>
			<li>
				<a href="http://localhost:3000/?name=&email=&phone=&photo=">RelationShips</a>
			</li>
			<li>
				<a href="http://localhost:3000/?name=&email=&phone=&photo=">Requirements</a>
			</li>
			<li>
				<a href="http://localhost:3000/?name=&email=&phone=&photo=">Users</a>
			</li>
			<li>
				<a href="http://localhost:3000/?name=&email=&phone=&photo=">Sign Up</a>
			</li>
		</ul>
	</nav>
);