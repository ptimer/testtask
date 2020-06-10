import React from 'react';
import './Button.scss'

const Button = ({text, onClick}) => (
	<div className="Button">
		{onClick ? <input onClick={onClick} type="submit" className="Button__input" value={text}/> : <input type="submit" className="Button__input" value={text}/>}
	</div>
);

export default Button;
