import React from 'react';
import classNames from "classnames";
import './Button.scss'

const Button = ({text, onClick, className}) => (
	<div className="Button">
		{onClick ? <input onClick={onClick} type="submit" className={classNames('Button__input', className)} value={text}/> : <input type="submit" className={classNames('Button__input', className)} value={text}/>}
	</div>
);

export default Button;
