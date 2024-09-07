import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './graphics/logo.svg';
import { push as Menu } from 'react-burger-menu';
import './Header.css';
import { MouseEvent, useEffect, useRef, useState } from 'react';

interface MenuRef {
	closeMenu: () => void;
}

export const Header = () => {
	// const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (e:MouseEvent) => {
		// setIsOpen(prevState => !prevState)
		// console.log(e.target)
		console.log(menuRef.current)
		if (menuRef.current) {
			// console.log(menuRef.current)
			(menuRef.current as any).closeMenu();
		}
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

				<div onClick={handleCategoryClick} id='sidepanel-container'>
					<Menu right pageWrapId={ "page-wrap"} outerContainerId={ "app-container"}>
						<Nav.Link href="#our-story">Our Story</Nav.Link>
						<Nav.Link href="#what-we-do">What We Do</Nav.Link>
						<Nav.Link href="#our-work">Our Work</Nav.Link>
						<Nav.Link href="#work-with-us">Work With Us</Nav.Link>
					</Menu>
				</div>
			</Container>
		</Navbar>
	)
}