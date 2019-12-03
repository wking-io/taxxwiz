const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

module.exports = {
	siteMetadata: {
		title: "We're Hiring | TaxxWiz",
		titleTemplate: '%s | TaxxWiz',
		description: 'Join a fast growing company that has doubled every year.',
		siteUrl: 'https://www.mytaxxwiz.com',
		image: {
			src: '/images/favicon.png',
			alt: 'TaxxWiz Logo',
			width: '1200',
			height: '900'
		},
		twitterUsername: '@TaxxWiz'
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/data`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `TaxxWiz`,
				short_name: `TaxxWiz`,
				start_url: `/`,
				background_color: `#FFFFFF`,
				theme_color: `#FFFFFF`,
				display: `minimal-ui`,
				icon: `static/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-postcss`,
		`gatsby-plugin-offline`,
		{
			resolve: 'gatsby-plugin-stylelint',
			options: {
				files: [ 'src/*.css' ],
				configFile: 'stylelint.config.js'
			}
		},
		`gatsby-plugin-sitemap`,
	]
};
