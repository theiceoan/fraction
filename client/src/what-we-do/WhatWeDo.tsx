import { Button } from 'react-bootstrap';
import { Line } from '../Line';
import { contentDetails } from './contentDetails';
import './WhatWeDo.css';
import Card from 'react-bootstrap/Card';

interface WhatWeDoProps {
	openModal: () => void;
}

export const WhatWeDo = ({ openModal }: WhatWeDoProps) => {
	return (
		<div className='what-we-do-container'>
				<div className='what-we-do-text-container'>
					<div className='title-with-lines'>
						<Line />
						<h1>WHAT WE DO</h1>
						<Line />
					</div>
					<h4>
						We're Built To <b>Deliver Software Projects</b> For All
						Industries With A <b>Cutting-Edge, Versatile</b> Technology Stack
					</h4>
				</div>
				<div className='what-we-do-details-container'>
					{contentDetails.map((item) => (
						<div className='item-container' key={item.id}>
							<Card bg='light' text='black' style={{ opacity: '0.7', height: '8em' }}>
								<Card.Body>
									<Card.Img
										src={item.svgPath}
										width="10px"
										alt={item.title}
										className="what-we-do-svg"
									/>
									<Card.Title>{item.title}</Card.Title>
								</Card.Body>
							</Card>
						</div>
					))}
				</div>
				<div className='waiting-list-button-container'>
					<Button
						size='lg'
						variant='outline-info'
						onClick={openModal}>
						Want To Know If We Can Turn Your Ideas Into Reality?
					</Button>
				</div>
		</div>
	);
};
