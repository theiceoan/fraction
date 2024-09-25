import { contentDetails } from './contentDetails';
import './WhatWeDo.css';
import Card from 'react-bootstrap/Card';

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
				{contentDetails.map((item) => (
					<Card bg='light' text='black' style={{ opacity: '0.7'}} key={item.id}>
						<Card.Body>
							<Card.Img
								src={item.svgPath}
								width="10px"
								style={{width: 'inherit'}}
								alt={item.title}
								className="benefit-svg"
							/>
							<Card.Title>{item.title}</Card.Title>
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	)
}