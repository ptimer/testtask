import React from 'react';
import classNames from "classnames";

import './Header.scss'
import LogoSvg from '../../assets/img/logo.svg'


const Header = ({children, className }) => (
	<header className={classNames('header', className)}>
		<img src={LogoSvg} className="header__logo" alt="logo" />
		{children}
	</header>
);

export default Header;
