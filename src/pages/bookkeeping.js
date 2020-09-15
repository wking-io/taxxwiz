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
            TaxxWiz<br />Bookkeeping
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
            With TaxxWiz Book Keeping we make sure you have the tools equipped to owe less money during Taxx Time/ or
            get a bigger refund, on top of running a well-oiled machine with a full digital accounting service.
          </p>
        </div>
      </section>
      <section className="w-5/6 max-w-4xl mx-auto pt-20 pb-12">
        <h3 className="text-4xl font-bold tracking-tight mb-4">What TaxxWiz Bookkeeping Can Do For You</h3>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 md:mr-4">
            <h4 className="text-xl text-primary font-bold uppercase mt-4 md:mt-6">TaxxWiz Team</h4>
            <ul className="list-disc pl-4 ml-2 mt-4 text-grey-600">
              <li className="mt-2">Help track your business and expenses</li>
              <li className="mt-2">Offer expert advice on more write-offs</li>
              <li className="mt-2">1 Yearly Verbal Assessment for the Tax Season</li>
              <li className="mt-2">Make sure all paperwork is ready for your biggest refund.</li>
            </ul>
            <h4 className="text-xl text-primary font-bold uppercase mt-4 md:mt-6">Software Benefits</h4>
            <ul className="list-disc pl-4 ml-2 mt-4 text-grey-600">
              <li className="mt-2">Unlimited income and expense tracking</li>
              <li className="mt-2">Track sales tax on income and expenses</li>
              <li className="mt-2">Add unlimited partners, collaborators or accountants</li>
              <li className="mt-2">Fully functional double entry system. Generate financial statements for year-end</li>
              <li className="mt-2">
                Powerful reports on Overdue Invoices &amp; Bills, Cash Flow, Profit &amp; Loss and more
              </li>
              <li className="mt-2">Unlimited bank and credit card connections</li>
              <li className="mt-2">Easily organize income and expenses into tax categories</li>
              <li className="mt-2">Run multiple businesses in one account</li>
              <li className="mt-2">Instantly see how your business is performing on your dashboard</li>
            </ul>
          </div>
          <div className="flex-1 md:ml-4">
            <h4 className="text-xl text-primary font-bold uppercase mt-4 md:mt-6">Invoicing</h4>
            <ul className="list-disc pl-4 ml-2 mt-4 text-grey-600">
              <li className="mt-2">Unlimited invoices: make and send as many as you&#39;d like</li>
              <li className="mt-2">Accept credit card and bank payments right in the invoice (fees as low as 1%)</li>
              <li className="mt-2">Get more time back with recurring billing</li>
              <li className="mt-2">Let Our Team do the chasing - we send out reminders on your behalf</li>
              <li className="mt-2">Automatically sync your invoices and accounting all in one place</li>
            </ul>
            <h4 className="text-xl text-primary font-bold uppercase mt-4 md:mt-6">Receipt Scanning</h4>
            <ul className="list-disc pl-4 ml-2 mt-4 text-grey-600">
              <li className="mt-2">Unlimited receipt scanning with our free mobile app</li>
              <li className="mt-2">Integrate seamlessly with the accounting software by Wave</li>
              <li className="mt-2">Capture receipts even when you’re offline</li>
              <li className="mt-2">Say goodbye to paper receipts and spreadsheets</li>
              <li className="mt-2">Snap a photo of your receipt, we&#39;ll automatically fill in the rest</li>
              <li className="mt-2">Available on Android and iOS</li>
              <li className="mt-2">Incorporate receipts into your accounting reports</li>
              <li className="mt-2">Scan multiple receipts all at once</li>
              <li className="mt-2">No setup fees, monthly fees, or hidden fees</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="plans" className="grid w-5/6 max-w-4xl mx-auto md:grid-cols-2 gap-8 mt-24 pb-16">
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
              LET TAXXWIZ DO THE HEAVY LIFTING. We will categorize and make sure you are compliant. Call once a month
              for consultation. We will find more write offs and advantages and have everything you need to get the most
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
