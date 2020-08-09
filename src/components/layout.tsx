import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<Container className="p-0">
				<div className={layoutStyles.content}>{children}</div>
			</Container>
			<Container className={layoutStyles.footer} fluid>
				<Container className="p-0">
					<Footer />
				</Container>
			</Container>
		</div>
	);
};

export default Layout;
