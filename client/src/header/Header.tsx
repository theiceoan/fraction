import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './graphics/logo.svg';
import { slide as Menu } from 'react-burger-menu';
import './Header.css';
import { useState } from 'react';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
		console.log(isOpen)
		setIsOpen(!isOpen)
	};

	return (
		<Navbar className='header' bg='dark' sticky='top'>
			<Container style={{maxWidth: 'none'}}>
				<Navbar.Brand href="#home" className='logo-container'>
					<img src={logo} className='App-logo' alt='logo' />
					<h3 className='logo-name'>FRACTION</h3>
				</Navbar.Brand>

				<div className='header-items-container'>
					<Nav.Link href="#our-story">Our Story</Nav.Link>
					<Nav.Link href="#what-we-do">What We Do</Nav.Link>
					<Nav.Link href="#our-work">Our Work</Nav.Link>
					<Nav.Link href="#work-with-us">Work With Us</Nav.Link>
				</div>

			<div onClick={toggleMenu} className='hamburger-outer-container'>
				<Menu noOverlay right pageWrapId={ "page-wrap"} isOpen={isOpen}>
					<main id='page-wrap'>
						<Nav.Link href="#our-story">Our Story</Nav.Link>
						<Nav.Link href="#what-we-do">What We Do</Nav.Link>
						<Nav.Link href="#our-work">Our Work</Nav.Link>
						<Nav.Link href="#work-with-us">Work With Us</Nav.Link>
					</main>
				</Menu>
			</div>
			</Container>
		</Navbar>
	)
}