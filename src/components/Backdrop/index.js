import React from 'react'
import './Backdrop.scss'

export default ({onClick}) => (
	<div className='backdrop' onClick={onClick}></div>
)