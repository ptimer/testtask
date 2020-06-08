import React from 'react';
import './Button.scss'

const Button = ({text}) => (
	<div className="Button">
		<input type="submit" className="Button__input" value={text}/>
	</div>
);

export default Button;
