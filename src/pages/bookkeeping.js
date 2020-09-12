import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 832.691V214.302L1440 279.432V708.241L0 832.691Z"
            fill="#FCEE21"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 787.664V0.742126L1145.5 432.5L0 787.664Z"
            fill="#FB8F3C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 633.993V584.057L1440 119.244V789.085L0 633.993Z"
            fill="#FF0000"
          />
        </svg>

        <div className="absolute bookkeeping-title">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-none">
            Taxxwix<br />Bookkeeping
          </h1>
          <Link
            className="mt-6 inline-block px-16 py-4 bg-transparent text-lg font-bold uppercase text-white border border-solid border-white tracking-tight"
            to="/bookkeeping#plans"
          >
            Get Started Now
          </Link>
        </div>
        <div className="absolute bookkeeping-content text-white max-w-md text-sm lg:text-base">
          <p className="leading-relaxed">
            Write Offs, Business Loan Eligibility, Bigger Tax Refunds, Less Money Owed, Audit Protection,
            GranEligibility, and Data Driven Results all have one thing in common……TaxxWiz Book Keeping.
          </p>
          <p className="leading-relaxed mt-4">
            With Taxx Wiz Book Keeping we make sure you have the tools equipped to owe less money during Taxx Time/ or
            get a bigger refund, on top of running a well-oiled machine with a full digital accounting service.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
