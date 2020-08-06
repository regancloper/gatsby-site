import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<Navbar style={{ backgroundColor: 'lavender' }}>
			<Container>
				<Navbar.Brand>
					<Link to="/">Home</Link>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link>
						<Link to="/blog">Blog</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/about">About</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/contact">Contact</Link>
					</Nav.Link>
				</Nav>
				<Nav>
					<FontAwesomeIcon icon={faShoppingBag} />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
