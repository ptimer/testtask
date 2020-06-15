import React, {Fragment} from 'react';
import './User.scss';

const User = ({user}) => (
	<div className="User">
		{user && <Fragment><img src={user.photo} alt={user.name}/>
				 <h3 className="User__name">{user.name}</h3>
				 <span className="User__position">{user.position}</span>
				 <span className="User__email">{user.email}</span>
				 <span className="User__phone">{user.phone}</span></Fragment>}
	</div>
);

export default User;
