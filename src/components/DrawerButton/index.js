import React from 'react'
import './DrawerButton.scss'

export default ({onClick}) => (
	<button className='toggle-button' onClick={onClick}>
		<div className='toggle-button__line'></div>
		<div className='toggle-button__line'></div>
		<div className='toggle-button__line'></div>
	</button>
)