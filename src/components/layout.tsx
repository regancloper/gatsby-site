import React from 'react';
import Header from './header';
import Footer from './footer';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
