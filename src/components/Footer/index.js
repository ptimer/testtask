import React from 'react'
import classNames from 'classnames'
import './Footer.scss'

const Footer = ({children, className }) => (
	<footer className={classNames('footer', className)}>
		<p>&copy; abz.agency specially for the test task</p>
	</footer>
);

export default Footer;
