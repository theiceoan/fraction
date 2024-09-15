import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LandingContent.css';
import logo from './graphics/logo.svg';
import leftArrow from './graphics/leftArrow.svg';
import rightArrow from './graphics/rightArrow.svg';
import { MouseEvent, useEffect, useState } from 'react';
import { benefitsOfOutsourcing } from './static/benefitsOfOutsourcing';
import { WaitingList } from '../waiting-list/WaitingList';

export const LandingContent = () => {
	const [currentBenefit, setCurrentBenefit] = useState<number>(0);
	const [modalShow, setModalShow] = useState<boolean>(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentBenefit(prevBenefit => (prevBenefit + 1) % benefitsOfOutsourcing.length);
		}, 30000)

		return () => clearInterval(intervalId);
	})

	const handleBenefitClick = (e:MouseEvent<HTMLElement>) => {
		const className = e.currentTarget.getAttribute('class');
		if (className === 'left-arrow') {
			setCurrentBenefit(prevBenefit =>
				(prevBenefit - 1 + benefitsOfOutsourcing.length) % benefitsOfOutsourcing.length);
		} else if (className === 'right-arrow') {
			setCurrentBenefit(prevBenefit =>
				(prevBenefit + 1) % benefitsOfOutsourcing.length);
		}
	}

	return (
		<>
		<div className="landing-content-container">
			<div className='background-graphic'></div>
			<div className='corner-graphic'></div>
			<main className="main-text-container">
				<h1>PROVIDING <span className='highlight-gold'>HIGH-QUALITY </span>
				TECH SOLUTIONS AT A <span className='highlight-blue'> FRACTION </span>
				OF THE <span className='highlight-green'>COST</span>
				</h1>
				<h4 style={{paddingBottom: '1em'}}>Tailored solutions that solve your problems
					and let you focus on delivering value and impact
				</h4>
			</main>
			<div className='waiting-list-button-container'>
				<Button
					size='lg' variant='outline-info'
					onClick={() => setModalShow(true)}>
						Interested? Join Our Waiting List
				</Button>
			</div>
			<main className='container-to-be-renamed'>
				<Card bg='light' text='black' style={{ opacity: '0.7'}}>
					<Card.Body>
						<span className='arrows'>
							<img
								className='left-arrow'
								onClick={handleBenefitClick}
								src={leftArrow}
								alt="left arrow"
							/>
							<img
								className='right-arrow'
								onClick={handleBenefitClick}
								src={rightArrow}
								alt="right arrow"
							/>
						</span>
						{/* <span className='right-arrow'></span> */}
						<Card.Title>{benefitsOfOutsourcing[currentBenefit].title}</Card.Title>
						<Card.Text>{benefitsOfOutsourcing[currentBenefit].content}</Card.Text>
						<Card.Img
							src={logo}
							width="10px"
							alt={benefitsOfOutsourcing[currentBenefit].title}
							className="benefit-svg"
						/>
					</Card.Body>
				</Card>
			</main>
		</div>
		<WaitingList show={modalShow} onHide={() => setModalShow(false)} />
		</>
	)
}