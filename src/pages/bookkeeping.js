import React from 'react';

import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Checkout from '../components/checkout';

const BookkeepingPage = ({ data }) => {
  const { siteUrl } = data.site.siteMetadata;
  return (
    <Layout label="Home">
      <SEO title="Easy online tax returns without leaving your home" />
      <section className="relative">
        <svg
          className="w-full h-auto -mt-8"
          width="1440"
          height="833"
          viewBox="0 0 1440 833"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 832.691V214.302L1440 279.432V708.241L0 832.691Z"
            fill="#FCEE21"
          />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 787.664V0.742126L1145.5 432.5L0 787.664Z" fill="#FB8F3C" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 633.993V584.057L1440 119.244V789.085L0 633.993Z"
            fill="#FF0000"
          />
        </svg>

        <div className="w-4/5 md:w-auto mx-auto md:m-0 mt-6 md:absolute bookkeeping-title">
          <h1 className="text-primary md:text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-none">
            Taxxwix<br />Bookkeeping
          </h1>
          <Link
            className="mt-3 md:mt-6 inline-block px-12 md:px-8 lg:px-12 py-3 lg:py-4 bg-transparent lg:text-lg font-bold uppercase md:text-white border border-solid border-grey-400 md:border-white tracking-tight"
            to="/bookkeeping#plans"
          >
            Get Started Now
          </Link>
        </div>
        <div className="mt-8 md:-mb-8 lg:mb-0 w-4/5 md:w-auto mx-auto md:m-0 md:absolute bookkeeping-content md:text-white max-w-sm lg:max-w-md text-sm lg:text-base">
          <p className="leading-relaxed">
            Write Offs, Business Loan Eligibility, Bigger Tax Refunds, Less Money Owed, Audit Protection, Grant
            Eligibility, and Data Driven Results all have one thing in common……TaxxWiz Book Keeping.
          </p>
          <p className="leading-relaxed mt-4">
            With Taxx Wiz Book Keeping we make sure you have the tools equipped to owe less money during Taxx Time/ or
            get a bigger refund, on top of running a well-oiled machine with a full digital accounting service.
          </p>
        </div>
      </section>
      <section className="grid w-5/6 max-w-4xl mx-auto md:grid-cols-2 gap-8 mt-24 pb-16">
        <div className="p-8 border border-solid border-black relative">
          <div className="bg-primary text-white font-bold px-4 py-2 absolute top-0 right-0 -mt-4 -mr-4">
            <p>$9.70/mo</p>
          </div>
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Do It Yourself With TaxxWiz</h3>
            <div className="flex-1">
              <p className="text-grey-600 mt-3">
                For this low cost you will get access to our 3rd Party Platform and a member of our team will check in
                and see how you are doing with an emailed communication every other month.
              </p>
              <p className="text-grey-600 mt-3">Also includes 1 Verbal Yearly assessment for Tax Season.</p>
            </div>
            <Checkout url={siteUrl} price={process.env.GATSBY_YOURSELF_PRICE} />
          </div>
        </div>
        <div className="p-8 border border-solid border-black relative">
          <div className="bg-primary text-white font-bold px-4 py-2 absolute top-0 right-0 -mt-4 -mr-4">
            <p>$58/mo</p>
          </div>
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Taxx Team Bookkeeping</h3>
            <p className="text-grey-600 mt-3 flex-1">
              TaxxWiz does your bookkeeping. We will categorize and make sure you are compliant. Call once a month for
              consultation. We will find more write offs and advantages and have everything you need to get the most
              money back this year. You will have your own robot and team in your pocket.
            </p>
            <Checkout url={siteUrl} price={process.env.GATSBY_TEAM_PRICE} />
          </div>
        </div>
        <div className="md:col-span-2 bg-grey-200 relative p-8">
          <div className="bg-primary text-white font-bold px-4 py-2 absolute top-0 right-0 -mt-4 -mr-4">
            <p>Contact Us</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Business Consulting and Accountants</h3>
            <p className="mt-3 text-grey-700">
              Do you need your own consultations on tax, legal, or finances. Marketing, Operations, and/or video and
              technology from members of our exec team. Prices starting as low as $789 to help take your business to the
              next level!
            </p>
            <Link
              className="mt-6 inline-block px-12 py-3 bg-grey-800 hover:bg-grey-900 font-bold text-white tracking-tight"
              to="/contact"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookkeepingPage;

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
