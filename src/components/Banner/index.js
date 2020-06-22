import React from 'react'
import classNames from 'classnames'
import './Banner.scss'
import sizes from 'react-sizes'
import {variables} from '../../utils'

import { Button } from '../'

const Banner = ({className, mobile}) => (

	<div className={classNames('banner', className)}>
		<div className='banner__content'>
			<h1>Test assignment for frontend developer position</h1>
			{mobile ? <p>We kindly remind you that your test assignment should be submited 
			as a link to github/bitbucket repository.</p>:
			<p>We kindly remind you that your test assignment should be submited 
			as a link to github/bitbucket repository. Please be patient, we consider
			and respond to every application that meets minimun requirements.
			We look forward to your submission. Good luck! The photo has to scale
			in the banner area on the different screens</p>}
			<a href='#sign-up'><Button>Sign up now</Button></a>
		</div>
		
	</div>
)

// Для отображения другого текста на мобильной версии
const mapSizesToProps = ({width}) => ({
	mobile: (width && width <= variables.mobileWidth),
})

export default sizes(mapSizesToProps)(Banner)