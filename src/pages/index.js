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
                <span className="text-primary">Get more money</span> on your taxes this year without ever leaving your
                house.
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
                  Want to learn more? Contact us now
                </a>
              </div>
            </div>
            <ul className="flex flex-col items-center justify-end pb-16">
              <li className="mb-8 h-4">
                <a className="text-white hover:text-instagram" href="https://www.instagram.com/taxxwiz/?hl=en">
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
      <section className="py-32 bg-white">
        <div className="w-5/6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <Image
              image="pay"
              className="w-2/5 h-auto flex-shrink-0 mr-8"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
            <div className="flex-1">
              <h3 className="text-4xl font-bold tracking-tight mb-4">Easy and Simple</h3>
              <p className="text-grey-500 leading-relaxed">
                With our mobile app it has never been easier to do your taxes. You submit your documents and information
                from the comfort of your couch. You can chat with our tax professionals while drinking your morning
                coffee. Have the peace of mind that our team has your back while you enjoy your day.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-center mt-8">
            <Image
              image="taxxpro"
              className="w-2/5 h-auto flex-shrink-0 ml-8"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
            <div className="flex-1">
              <h3 className="text-4xl font-bold tracking-tight mb-4">Fast and Secure</h3>
              <p className="text-grey-500 leading-relaxed">
                Protecting your information is our priority. That is why we offer our secure portal to keep your
                documents safe, and delivered directly to our Preparers who can prepare your return in real time.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <Image
              image="feature"
              className="w-2/5 h-auto flex-shrink-0 mr-8"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
            <div className="flex-1">
              <h3 className="text-4xl font-bold tracking-tight mb-4">Get you biggest refund</h3>
              <p className="text-grey-500 leading-relaxed">
                Our licensed preparers and CPAs are committed to getting you the biggest and most accurate return for
                this tax season. Once they maximize your return just approve it, sit back, relax, and get your biggest
                refund.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-48">
        <div className="w-5/6 max-w-4xl mx-auto">
          <div className="flex items-center">
            <div className="md:mr-8">
              <h3 className="text-4xl font-bold tracking-tight mb-4">About us</h3>
              <p className="text-grey-500 leading-relaxed">
                Taxx Wiz is a company that partners with individuals and small businesses alike to offer strong tax
                preparation services, book-keeping, financial, and accounting services. We are a strong company that has
                seen tremendous growth over the past years since we started in a small back office in 2015. Now we have
                grown to have team members located nationwide, and have built a strong platform for our clients to
                connect with us anywhere.
              </p>
            </div>
            <Image
              image="laptop"
              className="w-1/2 h-auto flex-shrink-0 ml-8"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
          </div>
          <ul className="flex -mx-4 mt-12">
            <li className="product-detail">
              <h4 className="uppercase font-bold text-lg">Our Philosophy</h4>
              <p className="text-grey-500 leading-relaxed mt-4">
                Our philosophy is simple. Be fast, accurate, honest, fun, innovative, and always work in the best
                interest of our customers. We see ourselves as an affordable solution for individuals and business
                owners to have a reliable resource for financial needs and services.
              </p>
            </li>
            <li className="product-detail">
              <h4 className="uppercase font-bold text-lg">Be Apart Of Our Family</h4>
              <p className="text-grey-500 leading-relaxed mt-4">
                Our team prides itself in its family atmosphere, which helps us take pride in our work and our clients.
                Respect and relationships are of upmost importance to us we look to continue to build our family of
                Wizards.
              </p>
            </li>
          </ul>
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
                  TaxxWiz saved me $1,070 on my taxes this year that I would have never found on my own. I will
                  definitely be using them next year and every year after.
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
                  TaxxWiz saved me $1,070 on my taxes this year that I would have never found on my own. I will
                  definitely be using them next year and every year after.
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
                  TaxxWiz saved me $1,070 on my taxes this year that I would have never found on my own. I will
                  definitely be using them next year and every year after.
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
                  TaxxWiz saved me $1,070 on my taxes this year that I would have never found on my own. I will
                  definitely be using them next year and every year after.
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
