import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LandingContent.css';
import logo from '../logo-graphics/mobile-logo.png';
import { benefitsOfOutsourcing } from './static/benefitsOfOutsourcing';
import { Line } from '../Line';

interface LandingContentProps {
	openModal: () => void;
}

export const LandingContent = ({ openModal }:LandingContentProps) => {

	return (
		<div className="landing-content-container">
			{/* <div className='background-graphic'></div> */}
			{/* <div className='corner-graphic'></div> */}
			<main className="landing-text-container">
				<h1>DEVELOPING YOUR <span className='highlight-gold'>HIGH-QUALITY </span>
				TECH SOLUTIONS AT A <span className='highlight-blue'> FRACTION </span>
				OF THE <span className='highlight-green'>COST</span>
				</h1>
				<h4>Tailored solutions that solve your problems
					and let you focus on delivering value and impact
				</h4>
			</main>
			<div className='waiting-list-button-container'>
				<Button
					size='lg' variant='outline-info'
					onClick={openModal}>
						Interested? Join Our Waiting List
				</Button>
			</div>
			<div className='landing-text-container benefits'>
				<Line />
				<h2>BENEFITS OF OUTSOURCING WITH US</h2>
				<Line />
			</div>
			<main className='benefits-container'>
				{benefitsOfOutsourcing.map((benefit) => (
					<Card bg='light' text='black' style={{ opacity: '0.7'}} key={benefit.id}>
						<Card.Body>
							<Card.Img
								src={logo}
								width="10px"
								style={{width: 'inherit'}}
								alt={benefit.title}
								className="benefit-svg"
							/>
							<Card.Title>{benefit.title}</Card.Title>
							<Card.Text>{benefit.content}</Card.Text>
						</Card.Body>
					</Card>
				))}
			</main>
		</div>
	)
}