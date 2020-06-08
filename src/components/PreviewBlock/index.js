import React from 'react';
import './PreviewBlock.scss'

import { Button } from '../index'

const PreviewBlock = props => (
	<div className="PreviewBlock">
		<div className="PreviewBlock__content">
			<h1>Test assignment for frontend developer position</h1>
			<p>We kindly remind you that your test assignment should be submited 
			as a link to github/bitbucket repository. Please be patient, we consider
			and respond to every application that meets minimun requirements.
			We look forward to your submission. Good luck! The photo has to scale
			in the banner area on the different screens</p>
			<Button text="Sign up now" />
		</div>
		
	</div>
);

export default PreviewBlock;
