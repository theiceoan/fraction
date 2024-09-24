import './WhatWeDo.css';
import { SystemLockScreen } from '@vastjs/cyber-icons-react';

// categories: mobile dev, web dev, custom software dev, cloud solutions, cyber security, DevOps and Infrastructure Management, UI/UX Design

export const WhatWeDo = () => {
	return (
		<div className='what-we-do-container'>
			<div className='what-we-do-text-container'>
				<h1>WHAT WE DO</h1>
				<h4>
					We're Built To Deliver Software Projects For All
					Industries With A Cutting-Edge, Versatile Technology Stack
				</h4>
			</div>
			<div className='what-we-do-details-container'>
			{/* <SystemLockScreen theme="default" size={`2.5em`} /> */}
			</div>
		</div>
	)
}