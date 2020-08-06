import React from 'react';
import Layout from '../components/layout';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = ({}) => {
	return (
		<Layout>
			<h1>My Blog</h1>
			<p>Posts will show up here later on.</p>
		</Layout>
	);
};

export default BlogPage;
