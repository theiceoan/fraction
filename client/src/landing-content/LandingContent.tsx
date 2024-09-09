import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LandingContent.css'
import { useEffect, useState } from 'react';
import { benefitsOfOutsourcing } from './static/benefitsOfOutsourcing';

export const LandingContent = () => {
	const [currentBenefit, setCurrentBenefit] = useState<number>(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentBenefit(prevBenefit => (prevBenefit + 1) % benefitsOfOutsourcing.length);
		}, 5000)

		return () => clearInterval(intervalId);
	})

	return (
		<div className="landing-content-container">
			<div className='background-graphic'></div>
			<main className="main-text-container">
				<h1>PROVIDING <span className='highlight-gold'>HIGH-QUALITY </span>
				TECH SOLUTIONS AT A <span className='highlight-blue'> FRACTION </span>
				OF THE <span className='highlight-green'>COST</span>
				</h1>
				<h4>Tailored solutions that solve your problems
					and let you focus on delivering value and impact
				</h4>
				<Button variant='outline-info'>Want to Know More?</Button>
			</main>
			<main className='container-to-be-renamed'>
				<Card bg='dark' text='white'>
					<Card.Body>
						<Card.Title>{benefitsOfOutsourcing[currentBenefit].title}</Card.Title>
						<Card.Text>{benefitsOfOutsourcing[currentBenefit].content}</Card.Text>
					</Card.Body>
				</Card>
			</main>
		</div>
	)
}