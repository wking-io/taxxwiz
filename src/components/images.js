import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = ({ image, ...props }) => {
	const data = useStaticQuery(graphql`
		query {
			logo: file(relativePath: { eq: "images/logo.png" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			taxxwiz: file(relativePath: { eq: "images/taxxwiz.png" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			hiring: file(relativePath: { eq: "images/hiring.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			feature: file(relativePath: { eq: "images/taxxwiz-square.png" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return <Img fluid={data[image].childImageSharp.fluid} className="w-full h-full" {...props} />;
};
