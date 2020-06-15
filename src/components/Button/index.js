import React from 'react';
import classNames from "classnames";
import './Button.scss'

export default ({children, onClick, className}) => (
	<div className="Button">
		{onClick ? <input onClick={onClick} type="submit" className={classNames('Button__input', className)} value={children}/> : <input type="submit" className={classNames('Button__input', className)} value={children}/>}
	</div>
);