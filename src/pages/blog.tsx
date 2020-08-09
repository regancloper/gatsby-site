import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
	const blogData = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
					}
				}
			}
		}
	`);

	const renderBlogs = () => {
		return blogData.allMarkdownRemark.edges.map((blog: any) => (
			<li key={`${blog.node.frontmatter.title}-${blog.node.frontmatter.date}`}>
				<h2>{blog.node.frontmatter.title}</h2>
				<p>{blog.node.frontmatter.date}</p>
			</li>
		));
	};

	return (
		<Layout>
			<h1>My Blog</h1>
			<ol>{renderBlogs()}</ol>
		</Layout>
	);
};

export default BlogPage;
