import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';
import Head from '../components/head';

interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = ({}) => {
	return (
		<Layout>
			<Head title="Home" />
			<h1>Hello World!</h1>
			<p>My name is Regan Loper</p>
			<p>
				Need a developer? <Link to="/contact">Contact Me!</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;
