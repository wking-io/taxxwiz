import React, { useState } from 'react';
import VisuallyHidden from '@reach/visually-hidden';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/images';
import { ArrowIcon, InstagramIcon, FacebookIcon } from '../components/icons';

const AvailabilityField = () => (
  <div className="flex flex-col flex-1 mt-8">
    <label htmlFor="availability" className="font-bold text-sm lg:text-base">
      What times would you be available to work?
    </label>
    <div className="select mt-4 relative">
      <select
        className="bg-grey-200 appearance-none w-full p-2"
        name="Availability"
        defaultValue="No Answer"
        id="availability"
      >
        <option value="No Answer">Make a selection...</option>
        <option value="Morning">Morning (8 AM - 12 AM)</option>
        <option value="Evening">Evening (12 PM - 5 PM)</option>
        <option value="Night">Night (6 PM - 11 PM)</option>
        <option value="Full Early">Full (8 AM - 5 PM)</option>
        <option value="Full Late">Full (1 PM - 10 PM)</option>
      </select>
      <div className="absolute right-0 top-0 h-full px-4 flex items-center justify-center pointer-events-none">
        <ArrowIcon className="text-grey-500 w-auto h-4" direction="down" />
      </div>
    </div>
  </div>
);

const HiringPage = () => {
  const [ showField, updateShowField ] = useState(false);
  return (
    <Layout label="Hiring">
      <SEO title="Join a fast growing company that has doubled every year." />
      <section className="mt-8 md:mt-16">
        <div className="relative p-8 md:p-16 lg:p-24">
          <div className="md:mr-8 max-w-6xl lg:mx-auto">
            <div className="flex flex-col md:flex-row" data-animate-from-left="0">
              <Image
                image="taxxwiz"
                className="hidden md:block taxxwiz w-2/5 h-auto mb-8 md:mr-20"
                imgStyle={{ width: '100%', height: 'auto' }}
              />
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-8">
                  Time for your Taxxes to start paying you
                </h2>
                <h3 className="text-xl md:text-2xl leading-snug mb-12">
                  Join a fast growing company that <span className="text-primary">has doubled every year.</span>
                </h3>
                <a
                  href="#application"
                  className="btn--icon bg-primary hover:bg-primary-dark text-white uppercase flex items-center justify-start font-bold text-lg max-w-xs sm:w-56"
                >
                  <span className="px-8 inline-block flex-1 text-center">Apply Now</span>
                  <span className="icon p-4 border-l border-primary-dark inline-block">
                    <ArrowIcon className="h-full w-auto" direction="down" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="hidden absolute right-0 top-0 mr-16 md:flex flex-col justify-end items-center"
            data-animate-from-right="1"
          >
            <div className="w-px h-64 bg-grey-300 mb-20" />
            <ul className="flex flex-col items-center mb-20">
              <li className="mb-8 h-4">
                <a className="text-black hover:text-instagram" href="https://www.instagram.com/taxxwiz/?hl=en">
                  <InstagramIcon className="h-full w-auto" />
                </a>
              </li>
              <li className="h-4">
                <a className="text-black hover:text-facebook" href="https://www.facebook.com/taxxwiz/">
                  <FacebookIcon className="h-full w-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row relative" data-animate-from-bottom="1">
          <Image className="hiring-image w-full lg:w-1/2 flex-shrink-0 mt-2 lg:mt-0" image="hiring" />
          <div>
            <div className="p-8 md:p-16 md:pr-32 lg:pr-16 lg:pt-12">
              <div className="">
                <h3 className="uppercase font-bold text-lg">Our Mission</h3>
                <p className="mt-3 text-grey-500">
                  Taxx Wiz is a company that partners with individuals and small businesses alike to offer strong Tax
                  Preparation Services, book keeping, financial, and accounting services.
                </p>
              </div>
              <div className="mt-12">
                <h3 className="uppercase font-bold text-lg">Our Philosophy</h3>
                <p className="mt-3 text-grey-500">
                  Our Philosophy is simple. Provide fast, accurate, and honest services while keeping the work fun and
                  innovative. We always work in the best interest of our customers.
                </p>
              </div>
            </div>
            <div className="apply-box">
              <a href="#application" className="block p-12">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Apply Now</h3>
                <p className="mt-3 leading-tight">We are a growing family and we want you to be a part of the Team.</p>
                <div className="mt-6">
                  <ArrowIcon className="h-full w-auto" direction="down" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div />
      </section>
      <section id="application" className="w-5/6 max-w-3xl mx-auto mt-64 md:mt-48">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight md:pt-20 lg:pt-0">Job Descriptions.</h2>
        <ul className="">
          <li className="mt-8 description">
            <h3 className="uppercase font-bold text-xl text-primary">Taxx Wizard</h3>
            <div className="leading-relaxed">
              <p className="mt-4">
                As a Taxx Wizard you will be operating as a contractor under the umbrella of Taxx Wiz. Essentially
                running and operating your own business. As a wizard you will be responsible for establishing clients,
                building relationships with these clients, and learning some of the ins and outs of tax law to help
                benefit the clients you gain. This position will require good organizational skills, interpersonal
                skills, and the ability to communicate information at a fast pace.
              </p>
              <p className="mt-4">
                This position is also remote based, so potential applicants will need access to a computer and the
                internet, as well as a mobile device with Apple iOS or Android. You will be required to attend several
                online training sessions leading up to the beginning of the tax season.
              </p>
            </div>
          </li>
          <li className="mt-8 description">
            <h3 className="uppercase font-bold text-xl text-primary">Taxx Preparer</h3>
            <div className="leading-relaxed">
              <p className="mt-4">
                Our preparer position is based on hourly work. We are looking for someone who has some knowledge or
                background in preparing taxes, or someone who has the propensity to learn common tax preparation
                practices. This position will require someone who is goal oriented, pays close attention to details, and
                is thorough with their work.
              </p>
              <p className="mt-4">
                This position is also remote based, so potential applicants will need access to a computer and the
                internet, as well as a mobile device with Apple iOS or Android. You will be required to attend several
                online training sessions leading up to the beginning of the tax season.
              </p>
            </div>
          </li>
          <li className="mt-8 description">
            <h3 className="uppercase font-bold text-xl text-primary">Taxx Lawyer</h3>
            <div className="leading-relaxed">
              <p className="mt-4">
                Taxx Lawyer is based on hourly work. This position requires someone who understands legal issues and can
                keep confidential records and tax information for clients. This position will also require the candidate
                to understand finance and accounting principles, and must be able to communicate with both the state and
                government in regards to evaluating and assessing complicated tax issues.
              </p>
              <p className="mt-4">
                This position is also remote based, so potential applicants will need access to a computer and the
                internet, as well as a mobile device with Apple iOS or Android. You will be required to attend several
                online training sessions leading up to the beginning of the tax season.
              </p>
            </div>
          </li>
          <li className="mt-8 description">
            <h3 className="uppercase font-bold text-xl text-primary">CPA</h3>
            <div className="leading-relaxed">
              <p className="mt-4">
                A CPA with Taxxwiz is based on hourly work. We are requesting that this candidate supports all Taxxwiz
                business clients with tax and financial statement planning. This will include but is not limited to
                studying financial records, preparing tax forms, and overseeing audits. Candidate must have an
                accounting degree and a CPA certification.
              </p>
              <p className="mt-4">
                This position is also remote based, so potential applicants will need access to a computer and the
                internet, as well as a mobile device with Apple iOS or Android. You will be required to attend several
                online training sessions leading up to the beginning of the tax season.
              </p>
            </div>
          </li>
          <li className="mt-8 description">
            <h3 className="uppercase font-bold text-xl text-primary">Potential Franchisee</h3>
            <div className="leading-relaxed">
              <p className="mt-4">
                Interested in being your own business owner? Apply to this position to get more information about how
                you can start your own tax company!
              </p>
            </div>
          </li>
        </ul>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-12">Application Form.</h2>
        <div className="mt-4 md:mt-12 h-1 w-32 bg-primary" />
        <form
          className="mt-12 pb-32"
          name="hiring"
          method="POST"
          action="/hiring-thank-you"
          netlify-honeypot="bot-field"
          data-netlify="true"
          data-track
          data-event-category="Hiring"
          data-event-action="Submitted Application"
          data-event-label="Hiring Form"
        >
          <input type="hidden" name="form-name" value="hiring" />
          <VisuallyHidden>
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </VisuallyHidden>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col flex-1 m-0 md:mr-6">
              <label htmlFor="email" className="font-bold text-sm lg:text-base">
                Email Address
              </label>
              <input className="bg-grey-200 mt-4 p-2" name="Email Address" id="email" type="text" />
            </div>
            <div className="flex flex-col flex-1 mt-8 md:mt-0 md:ml-6">
              <label htmlFor="location" className="font-bold text-sm lg:text-base">
                Location <span className="font-normal">(City, State)</span>
              </label>
              <input className="bg-grey-200 mt-4 p-2" name="Location" id="location" type="text" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-8">
            <div className="flex flex-col flex-1 m-0 md:mr-6">
              <label htmlFor="name" className="font-bold text-sm lg:text-base">
                Full Name
              </label>
              <input className="bg-grey-200 mt-4 p-2" name="Full Name" id="name" type="text" />
            </div>
            <div className="flex flex-col flex-1 mt-8 md:mt-0 md:ml-6">
              <label htmlFor="education" className="font-bold text-sm lg:text-base">
                Highest Education Level
              </label>
              <div className="select mt-4 relative">
                <select
                  className="bg-grey-200 appearance-none w-full p-2"
                  name="Education"
                  id="education"
                  defaultValue="No Answer"
                >
                  <option value="No Answer">Make a selection...</option>
                  <option value="Some High School">Some High School</option>
                  <option value="High School">High School</option>
                  <option value="Some College">Some College</option>
                  <option value="Associates">Associates</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Masters">Masters</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
                <div className="absolute right-0 top-0 h-full px-4 flex items-center justify-center pointer-events-none">
                  <ArrowIcon className="text-grey-500 w-auto h-4" direction="down" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-8">
            <div className="flex flex-col flex-1 m-0 md:mr-6">
              <label htmlFor="employer" className="font-bold text-sm lg:text-base">
                Most Recent Employer
              </label>
              <input className="bg-grey-200 mt-4 p-2" name="Most Recent Employer" id="employer" type="text" />
            </div>
            <div className="flex flex-col flex-1 mt-8 md:mt-0 md:ml-6">
              <p className="font-bold text-sm lg:text-base">What Kind Of Work Are You Looking For?</p>
              <div className="flex mt-4">
                <div className="radio w-1/2">
                  <input
                    className="radio-input bg-grey-200 mt-4 p-2 visually-hidden"
                    value="Full Time"
                    id="full-time"
                    name="Kind Of Work"
                    type="radio"
                  />
                  <label
                    className="radio-label text-center block border-2 border-r border-grey-200 w-full p-2"
                    htmlFor="full-time"
                  >
                    Full Time Work
                  </label>
                </div>
                <div className="radio w-1/2">
                  <input
                    className="radio-input bg-grey-200 mt-4 p-2 visually-hidden"
                    value="Part Time"
                    id="part-time"
                    name="Kind Of Work"
                    type="radio"
                  />
                  <label
                    className="radio-label text-center block border-2 border-l border-grey-200 w-full p-2"
                    htmlFor="part-time"
                  >
                    Part Time Work
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 mt-8">
            <label htmlFor="telephone" className="font-bold text-sm lg:text-base">
              Phone Number
            </label>
            <input className="bg-grey-200 mt-4 p-2" name="Telephone" id="telephone" type="tel" />
          </div>
          <div className="flex flex-col flex-1 mt-8">
            <label htmlFor="position" className="font-bold text-sm lg:text-base">
              What position are you applying for?
            </label>
            <div className="select mt-4 relative">
              <select
                className="bg-grey-200 appearance-none w-full p-2"
                name="Position"
                id="position"
                defaultValue="No Answer"
                onChange={({ target }) => {
                  return target.value === 'Hourly Tax Preparer' ? updateShowField(true) : updateShowField(false);
                }}
              >
                <option value="No Answer">Make a selection...</option>
                <option value="CPA">CPA</option>
                <option value="Taxx Wizard">Taxx Wizard</option>
                <option value="Hourly Tax Preparer">Hourly Tax Preparer</option>
                <option value="Tax Lawyer">Tax Lawyer</option>
                <option value="Potential Franchise">Potential Franchise</option>
              </select>
              <div className="absolute right-0 top-0 h-full px-4 flex items-center justify-center pointer-events-none">
                <ArrowIcon className="text-grey-500 w-auto h-4" direction="down" />
              </div>
            </div>
          </div>
          {showField ? (
            <AvailabilityField />
          ) : (
            <VisuallyHidden>
              <AvailabilityField />
            </VisuallyHidden>
          )}
          <div className="flex flex-col flex-1 mt-8">
            <label htmlFor="experience" className="font-bold text-sm lg:text-base">
              How many years of experience?
            </label>
            <input className="bg-grey-200 mt-4 p-2" name="Work Experience" id="experience" type="text" />
          </div>
          <div className="flex flex-col flex-1 mt-8">
            <label htmlFor="good-fit" className="font-bold text-sm lg:text-base">
              How would you be a good fit for our family?{' '}
              <span className="font-normal">(In three sentences or less)</span>
            </label>
            <textarea name="Good Fit" id="good-fit" className="bg-grey-200 mt-4 p-2 h-32" />
          </div>
          <div className="text-right">
            <input
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 uppercase font-bold cursor-pointer text-right mt-8"
              value="Submit Application"
            />
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default HiringPage;
