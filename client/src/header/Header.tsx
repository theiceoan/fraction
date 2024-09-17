import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './graphics/logo.svg';
import { push as Menu, State } from 'react-burger-menu';
import './Header.css';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

  const handleStateChange = (state:State) => {
		setIsOpen(state.isOpen)
	};
	const handleCategoryClick = (e:MouseEvent) => {
		e.stopPropagation()
		setIsOpen(false)
	}
	const handleClickOutside = (e:Event) => {
		if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
			setIsOpen(false);
		}
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
					<Nav.Link href="#our-clients">Our Clients</Nav.Link>
					<Nav.Link href="#work-with-us">Work With Us</Nav.Link>
				</div>

				<div id='sidepanel-container' ref={menuRef}>
					<Menu
						right noOverlay
						pageWrapId={ "page-wrap"}
						outerContainerId={ "app-container"}
						onStateChange={handleStateChange}
						isOpen={isOpen}
					>
						<Nav.Link onClick={handleCategoryClick} href="#our-story">Our Story</Nav.Link>
						<Nav.Link onClick={handleCategoryClick} href="#what-we-do">What We Do</Nav.Link>
						<Nav.Link onClick={handleCategoryClick} href="#our-clients">Our Clients</Nav.Link>
						<Nav.Link onClick={handleCategoryClick} href="#work-with-us">Work With Us</Nav.Link>
					</Menu>
				</div>
			</Container>
		</Navbar>
	)
}