import React from 'react'
import classNames from 'classnames'
import { Navigation } from '../'
import './Header.scss'

export default ({drawerHandler, className}) => (
	<header className={classNames('header', className)}>
		<Navigation drawerHandler={drawerHandler} />
	</header>
);