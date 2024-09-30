import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo-graphics/mobile-logo.png';
import { stack as Menu, State } from 'react-burger-menu';
import './Footer.css';

export const Footer = () => {
	return (
		<footer>
			<Navbar className='footer' bg='dark' variant='light'>
				<Container className='footer-container'>
					<div className='footer-section'>
						<h5>Fraction Solutions</h5>
						<p>High-Quality Tech Solutions At A Fraction Of The Cost</p>
					</div>

					<div className='footer-section'>
						<h5>Contact Us</h5>
						{/* <p>Email: info@fractionsolutions.com</p> */}
						<p>Phone: +44 7368 132 846</p>
					</div>

					{/* <div className='footer-section'>
						<h5>Follow Us</h5>
						<a href='https://linkedin.com' target='_blank' rel='noreferrer'>LinkedIn</a> <br/>
						<a href='https://twitter.com' target='_blank' rel='noreferrer'>Twitter</a>
					</div> */}
				</Container>
			</Navbar>

			<div className='footer-bottom'>
				<img
					src={logo} // Update this with the actual path to your logo
					alt='Fraction Solutions Logo'
					className='footer-logo'
				/>
				<p>&copy; 2024 Fraction Solutions. All rights reserved.</p>
			</div>
		</footer>
	)
}
