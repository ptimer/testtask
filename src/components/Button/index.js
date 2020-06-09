import React from 'react';
import './Button.scss'

const Button = ({text, onClick, showButton}) => (
	<div className="Button">
		{onClick ? <input onClick={onClick} type="button" className="Button__input" value={text}/> : <input type="button" className="Button__input" value={text}/>}
	</div>
);

export default Button;
