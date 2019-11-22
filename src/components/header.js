import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { Menu, MenuList, MenuItem, MenuButton, MenuLink } from '@reach/menu-button';
import VisuallyHidden from '@reach/visually-hidden';

import { Image } from './images';
import { ContactIcon, TwitterIcon, InstagramIcon, FacebookIcon } from './icons';

function useWindowWidth() {
	if (typeof window != 'undefined') {
		const [ isMobile, setSize ] = useState(window.innerWidth < 768);

		useEffect(() => {
			const handleResize = () => setSize(window.innerWidth < 768);
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		});
		return isMobile;
	}
	return true;
}

const MobileMenu = () => (
	<Menu>
		{({ isOpen }) => (
			<nav className="flex-1 text-right">
				<MenuButton className="p-4 -mr-4 relative z-50">
					<VisuallyHidden>{isOpen ? 'Close' : 'Open'} Menu</VisuallyHidden>
					<span className={`hamburger`} aria-hidden>
						<span />
						<span />
						<span />
						<span />
					</span>
				</MenuButton>
				<MenuList className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-end p-12 sm:p-16 md:p-20 lg:p-24">
					<MenuLink
						as={Link}
						to="/hiring"
						className="font-bold text-lg hover:underline p-4 inline-block mr-12"
					>
						Save More Money
					</MenuLink>
					<MenuLink
						as={Link}
						to="/hiring"
						className="font-bold text-lg hover:underline p-4 inline-block mr-12"
					>
						We Are Hiring
					</MenuLink>
					<MenuLink
						as={Link}
						to="/hiring"
						className="font-bold text-lg hover:underline p-4 inline-block mr-12"
					>
						Contact Us
					</MenuLink>
					<MenuItem className="h-6 flex items-center mt-12" onSelect={() => {}}>
						<a as={Link} className="block px-4 h-full w-auto hover:text-twitter" href="/hiring">
							<TwitterIcon className="h-full w-auto" />
						</a>
						<a as={Link} className="block px-4 h-full w-auto hover:text-instagram" href="/hiring">
							<InstagramIcon className="h-full w-auto" />
						</a>
						<a as={Link} className="block px-4 h-full w-auto hover:text-facebook" href="/hiring">
							<FacebookIcon className="h-full w-auto" />
						</a>
					</MenuItem>
				</MenuList>
			</nav>
		)}
	</Menu>
);

const DesktopMenu = () => (
	<nav className="flex-1 text-right flex items-center justify-end">
		<Link to="/" className="text-black hover:underline p-4 inline-block mr-6 lg:mr-12">
			Save More Money
		</Link>
		<Link to="/hiring" className="link--highlight text-white p-4 inline-block mr-6 lg:mr-12">
			We Are Hiring
		</Link>
		<Link to="/contact" className="h-12 p-4 -mr-4 text-primary hover:text-primary-dark">
			<ContactIcon className="w-auto h-full" />
		</Link>
	</nav>
);

const Header = ({ label }) => {
	const isMobile = useWindowWidth();
	return (
		<header className="flex items-center w-full px-8 md:px-16 mt-2 md:mt-8">
			<Link
				className="block relative z-50"
				to="/"
				data-track
				data-event-category="Navigation"
				data-event-action="Viewed Home"
				data-event-label={`${label} - Logo`}
			>
				<Image image="logo" className="w-24 md:w-40 block" imgStyle={{ width: '100%', height: 'auto' }} />
			</Link>
			{isMobile ? <MobileMenu /> : <DesktopMenu />}
		</header>
	);
};

export default Header;
