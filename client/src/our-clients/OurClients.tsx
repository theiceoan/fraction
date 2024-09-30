import { Button, Card } from 'react-bootstrap';
import { Line } from '../Line';
import './OurClients.css';
import bikitaMinerals from './images/bikita-minerals-logo.png';
import firstCapital from './images/first-capital-bank-logo.jpeg';
import sendemTransportTech from './images/sendem-logo.jpg';
import youLearn from './images/youlearn-logo-text.png';
import logo from '../logo-graphics/horizontal-logo.png';

interface OurClientsProps {
	openModal: () => void;
}

export const OurClients = ({ openModal }:OurClientsProps) => {
	return (
		<div className='our-clients-container'>
			<div className='all-clients-container'>
				<div className='client-container'>
					<img src={bikitaMinerals} alt='Bikita Minerals' />
				</div>
				<div className='client-container'>
					<img src={firstCapital} alt='First Capital Bank' />
				</div>
				<div className='client-container'>
					<img src={sendemTransportTech} alt='Sendem Transport Technology' />
				</div>
				<div className='client-container'>
					<img src={youLearn} alt='You Learn' />
				</div>
			</div>
			<div className='clients-text-container button-like'>
				<h2 className='text'>
					THROUGH ALL OF OUR PARTNERS,
					WE CONTINUE TO DELIVER VALUE
					FOR OUR CLIENTS
				</h2>
				<h4 className='text'>Trusted By Leading <span className='colour-change'>Innovators</span>, Will You Be Next?</h4>
			</div>
			<div className='testimonials-container'>
				<div className='testimonials-text'>
					<Line />
						<h1 className='text'>TESTIMONIALS</h1>
					<Line />
				</div>
				<div className='testimonials'>
					<Card bg='dark' text='white' style={{ opacity: '0.7'}}>
							<Card.Body>
							<Card.Img
								src={logo}
								// width="20px"
								style={{width: 'inherit'}}
								alt="logo"
								className="testimonials-img"
							/>
								{/* <Card.Title>YOUR COMPANY</Card.Title> */}
								<Card.Text style={{fontSize: '1.5em'}}>
									Interested In Joining Us
									And Want To Hear What All Our
									Innovators Think About Us?
								</Card.Text>
								<Button
									onClick={openModal}
									size='lg'
									variant='outline-info'
								>
									Find Out More
								</Button>
							</Card.Body>
						</Card>
				</div>
			</div>
		</div>
	)
}