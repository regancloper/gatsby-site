import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';

interface BlogProps {
	data: {
		contentfulBlogPost: {
			title: string;
			publishedDate: string;
			body: { json: any };
		};
	};
}

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				json
			}
		}
	}
`;

const Blog: React.FC<BlogProps> = props => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node: any) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return <img src={url} alt={alt} />;
			},
		},
	};

	return (
		<Layout>
			<h1>{props.data.contentfulBlogPost.title}</h1>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			{documentToReactComponents(
				props.data.contentfulBlogPost.body.json,
				options
			)}
		</Layout>
	);
};

export default Blog;