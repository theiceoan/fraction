import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo-graphics/mobile-logo.png';
import { stack as Menu, State } from 'react-burger-menu';
import './Header.css';
import { MouseEvent, useEffect, useRef, useState } from 'react';

type Section = '#our-story' | '#what-we-do' | '#our-clients' | '#work-with-us';

interface HeaderProps {
	openModal: () => void;
}

export const Header = ({ openModal }:HeaderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

  const handleStateChange = (state:State) => {
		setIsOpen(state.isOpen)
	};
	const handleCategoryClick = (e:MouseEvent, sectionId: Section) => {
		e.stopPropagation()
		setIsOpen(false)

		if (sectionId === '#work-with-us') {
			openModal();
		} else {
			const section = document.querySelector(sectionId);
			if (section) {
				section.scrollIntoView({
					behavior: 'smooth',
					// block: 'start',
					// inline: 'start'
				})
			}
		}
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
					<Nav.Link onClick={(e) => handleCategoryClick(e, '#our-story')} href="#our-story">Our Story</Nav.Link>
					<Nav.Link onClick={(e) => handleCategoryClick(e, '#what-we-do')} href="#what-we-do">What We Do</Nav.Link>
					<Nav.Link onClick={(e) => handleCategoryClick(e, '#our-clients')} href="#our-clients">Our Clients</Nav.Link>
					<Button variant='outline-info' onClick={(e) => handleCategoryClick(e, '#work-with-us')} href="#work-with-us">Work With Us</Button>
				</div>

				<div id='sidepanel-container' ref={menuRef}>
					<Menu
						right noOverlay
						pageWrapId={ "page-wrap"}
						outerContainerId={ "app-container"}
						onStateChange={handleStateChange}
						isOpen={isOpen}
					>
						<Nav.Link onClick={(e) => handleCategoryClick(e, '#our-story')} href="#our-story">Our Story</Nav.Link>
						<Nav.Link onClick={(e) => handleCategoryClick(e, '#what-we-do')} href="#what-we-do">What We Do</Nav.Link>
						<Nav.Link onClick={(e) => handleCategoryClick(e, '#our-clients')} href="#our-clients">Our Clients</Nav.Link>
						<Button variant='outline-info' onClick={(e) => handleCategoryClick(e, '#work-with-us')} href="#work-with-us">Work With Us</Button>
					</Menu>
				</div>
			</Container>
		</Navbar>
	)
}