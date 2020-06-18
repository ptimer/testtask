import React from 'react';
import classNames from 'classnames';
import './Banner.scss'

import { Button } from '../'

export default ({className }) => (
	<div className={classNames('banner', className)}>
		<div className='banner__content'>
			<h1>Test assignment for frontend developer position</h1>
			<p>We kindly remind you that your test assignment should be submited 
			as a link to github/bitbucket repository. Please be patient, we consider
			and respond to every application that meets minimun requirements.
			We look forward to your submission. Good luck! The photo has to scale
			in the banner area on the different screens</p>
			<Button>Sign up now</Button>
		</div>
		
	</div>
);