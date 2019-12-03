import React from 'react';
import { Link } from 'gatsby';
import { Video } from 'cloudinary-react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { InstagramIcon, FacebookIcon, QuoteIcon } from '../components/icons';
import { Image } from '../components/images';

const IndexPage = () => {
	return (
		<Layout label="Hiring">
			<SEO />
			<Video
				className="object-cover top-0 w-full h-screen fixed"
				style={{ zIndex: '-1' }}
				cloudName="dzqdvin5s"
				publicId="taxxwiz/hero"
				loop="true"
				autoplay="true"
				muted="true"
			/>
			<section className="flex">
				<div className="flex-1 aspect-16:9">
					<div className="video-overlay-dark aspect-content flex items-end justify-between pl-24 pr-16">
						<div className="w-5/6 pb-48">
							<h2 className="text-white text-6xl font-bold tracking-tight leading-none">
								<span className="text-primary">Save more money</span> on your taxes this year without
								ever leaving your house.
							</h2>
							<div className="mt-16">
								<a
									className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-lg font-bold uppercase text-white tracking-tight"
									href="https://google.com"
								>
									Start Saving Now
								</a>
								<a
									className="inline-block px-8 py-4 underline hover:no-underline text-lg font-bold text-white tracking-tight"
									href="https://google.com"
								>
									Reach Out With Questions
								</a>
							</div>
						</div>
						<ul className="flex flex-col items-center justify-end pb-16">
							<li className="mb-8 h-4">
								<a
									className="text-white hover:text-instagram"
									href="https://www.instagram.com/taxxwiz/?hl=en"
								>
									<InstagramIcon className="h-full w-auto" />
								</a>
							</li>
							<li className="h-4">
								<a className="text-white hover:text-facebook" href="https://www.facebook.com/taxxwiz/">
									<FacebookIcon className="h-full w-auto" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-16 bg-white" />
			</section>
			<section className="pt-32 pb-48 bg-white">
				<div className="w-5/6 max-w-4xl mx-auto">
					<div className="flex justify-between items-center">
						<Image
							image="pay"
							className="w-2/5 h-auto flex-shrink-0 mr-8"
							imgStyle={{ width: '100%', height: 'auto' }}
						/>
						<div className="flex-1">
							<h3 className="text-4xl font-bold tracking-tight mb-4">You only pay if you save</h3>
							<p className="text-grey-500">
								Taxx Wiz is a company that partners with individuals and small businesses alike to offer
								strong Tax Preparation Services, book keeping, financial, and accounting services.
							</p>
						</div>
					</div>
					<div className="flex flex-row-reverse justify-between items-center mt-12">
						<Image
							image="feature"
							className="w-2/5 h-auto flex-shrink-0 ml-8"
							imgStyle={{ width: '100%', height: 'auto' }}
						/>
						<div className="flex-1">
							<h3 className="text-4xl font-bold tracking-tight mb-4">Prepared by a professional</h3>
							<p className="text-grey-500">
								Taxx Wiz is a company that partners with individuals and small businesses alike to offer
								strong Tax Preparation Services, book keeping, financial, and accounting services.
							</p>
						</div>
					</div>
					<div className="flex justify-between items-center mt-12">
						<Image
							image="feature"
							className="w-2/5 h-auto flex-shrink-0 mr-8"
							imgStyle={{ width: '100%', height: 'auto' }}
						/>
						<div className="flex-1">
							<h3 className="text-4xl font-bold tracking-tight mb-4">Never miss a dollar</h3>
							<p className="text-grey-500">
								Taxx Wiz is a company that partners with individuals and small businesses alike to offer
								strong Tax Preparation Services, book keeping, financial, and accounting services.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-white pb-32">
				<div className="w-5/6 max-w-6xl mx-auto relative testimonial">
					<h3 className="relative z-10 flex flex-col items-start text-5xl tracking-tight leading-none font-bold -ml-12 -mt-12">
						<span className="bg-white py-1 px-2">Don't take our word.</span>
						<span className="bg-white py-1 px-2">
							Hear from <span className="text-primary">happy customers</span>.
						</span>
					</h3>
					<ul className="relative flex flex-wrap -mt-8 pb-12 px-24 grid">
						<li className="grid-item">
							<blockquote>
								<QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
								<p className="text-grey-700 leading-relaxed mt-6">
									TaxxWiz saved me $1,070 on my taxes this year that I would have never found on my
									own. I will definitely be using them next year and every year after.
								</p>
								<div className="h-px bg-grey-300 w-24 mt-4" />
								<cite className="not-italic text-lg font-bold mt-4 block">
									Jared Banks saved <span className="text-primary">$1,234</span>
								</cite>
							</blockquote>
						</li>
						<li className="grid-item">
							<blockquote>
								<QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
								<p className="text-grey-700 leading-relaxed mt-6">
									TaxxWiz saved me $1,070 on my taxes this year that I would have never found on my
									own. I will definitely be using them next year and every year after.
								</p>
								<div className="h-px bg-grey-300 w-24 mt-4" />
								<cite className="not-italic text-lg font-bold mt-4 block">
									Jared Banks saved <span className="text-primary">$1,234</span>
								</cite>
							</blockquote>
						</li>
						<li className="grid-item">
							<blockquote>
								<QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
								<p className="text-grey-700 leading-relaxed mt-6">
									TaxxWiz saved me $1,070 on my taxes this year that I would have never found on my
									own. I will definitely be using them next year and every year after.
								</p>
								<div className="h-px bg-grey-300 w-24 mt-4" />
								<cite className="not-italic text-lg font-bold mt-4 block">
									Jared Banks saved <span className="text-primary">$1,234</span>
								</cite>
							</blockquote>
						</li>
						<li className="grid-item">
							<blockquote>
								<QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
								<p className="text-grey-700 leading-relaxed mt-6">
									TaxxWiz saved me $1,070 on my taxes this year that I would have never found on my
									own. I will definitely be using them next year and every year after.
								</p>
								<div className="h-px bg-grey-300 w-24 mt-4" />
								<cite className="not-italic text-lg font-bold mt-4 block">
									Jared Banks saved <span className="text-primary">$1,234</span>
								</cite>
							</blockquote>
						</li>
					</ul>
				</div>
				<div className="flex items-center justify-center mt-32">
					<Link
						to="/hiring"
						className="inline-block px-16 py-4 bg-primary hover:bg-primary-dark text-lg font-bold uppercase text-white tracking-tight"
					>
						Read More Testimonials
					</Link>
				</div>
			</section>
			<section className="final">
				<div className="w-5/6 pt-40 pb-8 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
					<h3 className="text-5xl text-center text-white font-bold tracking-tight leading-none">
						Now that you know what we are about. Let us help you save more money this year.
					</h3>
					<a
						className="inline-block px-16 py-4 bg-grey-900 hover:bg-black text-lg font-bold uppercase text-white tracking-tight mt-12"
						href="https://google.com"
					>
						Start Saving Now
					</a>
					<a
						className="inline-block px-8 py-4 underline hover:no-underline text-white tracking-tight mt-20"
						href="https://google.com"
					>
						Reach Out With Questions
					</a>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;
