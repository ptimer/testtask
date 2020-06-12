import React from 'react';
import './AboutMeBlock.scss';

import ManLaptopV1 from '../../assets/img/man-laptop-v1.svg'

const AboutMeBlock = props => (
	<div className="AboutMeBlock">
		<h2>Let's get acquainted</h2>
		<div className="AboutMeBlock__content">
			<img src={ManLaptopV1} alt="man laptop"/>
			<div className="AboutMeBlock__text">
				<h3>I am cool frontend developer</h3>
				<p>We will evaluate how clean your approach to writing css and javascript
				code is. You can use any CSS and Javascript 3d party libraries without any restriction.</p>
				<p>
					If 3d party css/javascript libraries are added to the project via
					bower/npm/yarn you will get bonus points. If you use any task runner
					(gulp/webpack) you will get bonus points as well. Slice service directory
					page PSD mockup into HTML5/CSS3.
				</p>
				<a href="">Sign up now</a>
			</div>
			
		</div>
		
	</div>
);

export default AboutMeBlock;
