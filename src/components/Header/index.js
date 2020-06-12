import React from 'react';
import classNames from "classnames";

import './Header.scss'
import LogoSvg from '../../assets/img/logo.svg'

/* Components import */
import Navigation from './Navigation/index';


const Header = ({className }) => (
	<header className={classNames('header', className)}>
		<img src={LogoSvg} className="header__logo" alt="logo" />
		<Navigation />
	</header>
);

export default Header;
