import React, {useRef, useEffect} from 'react';
import './UsersBlock.scss';

import { Button } from '../index'

function UsersBlock ({children, handleClick, showButton, posted}){

	const UsersBlock = useRef(null);
	const executeScroll = () => window.scrollTo(0, UsersBlock.current.offsetTop);

	useEffect(_ => {
		if(posted === true){
			executeScroll();
		}
	})

	return (<div className="UsersBlock" ref={UsersBlock}>
			<h2>Let's get acquainted</h2>
			<p>Attention! Sorting users by registration date</p>
			<div className="UsersBlock__users">
				{children}
			</div>
			
			{ showButton ? <div className="UsersBlock__button"><Button text="Show more" onClick={handleClick} /></div> : '' }
			
		</div>)
};

export default UsersBlock;
