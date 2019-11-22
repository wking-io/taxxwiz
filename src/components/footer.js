import React from 'react';
import { Link } from 'gatsby';

import { Image } from './images';

const Footer = ({ label }) => (
	<footer className="p-6 flex flex-col md:flex-row items-center">
		<Image image="logo" className="w-24 block md:mr-4 md:-mt-1" imgStyle={{ width: '100%', height: 'auto' }} />
		<p className="text-grey-500 flex-shrink-0 mt-4 md:mt-0">&copy; 2019 All Rights Reserved</p>
		<ul className="flex items-center flex-1 justify-end text-grey-500 mt-8 md:mt-0">
			<li>
				<Link className="block hover:underline px-4" to="/privacy-policy">
					Privacy Policy
				</Link>
			</li>
			<li>
				<Link className="block hover:underline px-4 -mr-4" to="/terms-of-service">
					Terms Of Service
				</Link>
			</li>
		</ul>
	</footer>
);

export default Footer;
