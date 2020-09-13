import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BookkeepingPage = () => {
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

        <div className="absolute bookkeeping-title">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-none mt-6">
            Your Payment<br />Was Successful
          </h1>
          <Link
            className="mt-6 inline-block px-16 py-4 bg-transparent text-lg font-bold uppercase text-white border border-solid border-white tracking-tight"
            to="/bookkeeping"
          >
            Back To Bookkeeping Page
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BookkeepingPage;
