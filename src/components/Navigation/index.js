import React from 'react';
import './Navigation.scss'

export default props => (
	<nav className="nav">
		<ul>
			<li>
				<a className="active" href="">About me</a>
			</li>
			<li>
				<a href="">RelationShips</a>
			</li>
			<li>
				<a href="">Requirements</a>
			</li>
			<li>
				<a href="">Users</a>
			</li>
			<li>
				<a href="">Sign Up</a>
			</li>
		</ul>
	</nav>
);