import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = ({}) => {
	return (
		<Layout>
			<h1>Hello World!</h1>
			<p>My name is Regan Loper</p>
			<p>
				Need a developer? <Link to="/contact">Contact Me!</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;
