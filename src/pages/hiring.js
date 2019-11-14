import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Image } from "../components/images"
import { ArrowIcon, TwitterIcon, InstagramIcon, FacebookIcon } from "../components/icons"

const HiringPage = () => (
  <Layout label="Hiring">
    <SEO />
    <section className="mt-16">
      <div className="flex pl-24 pr-16 mt-24">
        <div className="flex-1">
          <div className="mr-32 max-w-5xl">
            <h2 className="text-6xl font-bold tracking-tight leading-none" data-animate-from-left="0">Join a fast growing company that has doubled every year.</h2>
            <div className="flex mt-24" data-animate-from-bottom="1">
              <div className="flex-1 mr-8">
                <h3 className="uppercase font-bold text-lg">Our Mission</h3>
                <p className="mt-6 text-grey-500">Taxx Wiz is a company that partners with individuals and small businesses alike to offer strong Tax Preparation Services, book keeping, financial, and accounting services.</p>
              </div>
              <div className="flex-1 ml-8">
                <h3 className="uppercase font-bold text-lg">Our Philosophy</h3>
                <p className="mt-6 text-grey-500">Our Philosophy is simple. Provide fast, accurate, and honest services while keeping the work fun and innovative. We always work in the best interest of our customers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center" data-animate-from-right="1">
          <div className="w-px h-64 bg-grey-300 mb-20"></div>
          <ul className="flex flex-col items-center mb-20">
            <li className="mb-8 h-4"><a className="text-black hover:text-twitter" href=""><TwitterIcon className="h-full w-auto" /></a></li>
            <li className="mb-8 h-4"><a className="text-black hover:text-instagram" href=""><InstagramIcon className="h-full w-auto" /></a></li>
            <li className="h-4"><a className="text-black hover:text-facebook" href=""><FacebookIcon className="h-full w-auto" /></a></li>
          </ul>
        </div>
      </div>
      <div data-animate-from-bottom="1">
        <div className="h-56 relative">
          <div className="absolute inset-0">
            <Image className="apply-image w-10/12 h-full" image="hiring"/>
          </div>
          <div className="apply-box">
            <a href="#application" className="block p-12">
              <h3 className="text-4xl font-bold tracking-tight">Apply Now</h3>
              <p className="mt-3 leading-tight">We are a growing family and we want you to be a part of the Team.</p>
              <div className="mt-6">
                <ArrowIcon className="h-full w-auto" direction="down" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="application" className="w-5/6 max-w-3xl mx-auto mt-32">
      <h2 class="text-5xl font-bold tracking-tight">Application Form.</h2>
      <div className="mt-12 h-1 w-32 bg-primary"></div>
      <form className="mt-12 pb-32" action="">
        <div className="flex">
          <div className="flex flex-col flex-1 mr-6">
            <label htmlFor="name" className="font-bold">Email Address</label>
            <input className="bg-grey-200 mt-4 p-2" id="name" type="text"/>
          </div>
          <div className="flex flex-col flex-1 ml-6">
            <label htmlFor="location" className="font-bold">Location <span className="font-normal">(City, State)</span></label>
            <input className="bg-grey-200 mt-4 p-2" id="location" type="text"/>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="flex flex-col flex-1 mr-6">
            <label htmlFor="name" className="font-bold">Full Name</label>
            <input className="bg-grey-200 mt-4 p-2" id="name" type="text"/>
          </div>
          <div className="flex flex-col flex-1 ml-6">
            <label htmlFor="education" className="font-bold">Highest Education Level</label>
            <div className="select mt-4 relative">
              <select className="bg-grey-200 appearance-none w-full p-2" name="education" id="education">
                <option value="No Answer" selected>Make a selection...</option>
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
        <div className="flex mt-8">
          <div className="flex flex-col flex-1 mr-6">
            <label htmlFor="name" className="font-bold">Most Recent Employer</label>
            <input className="bg-grey-200 mt-4 p-2" id="name" type="text"/>
          </div>
          <div className="flex flex-col flex-1 ml-6">
            <p className="font-bold">What Kind Of Work Are You Looking For?</p>
            <div className="flex mt-4">
              <div className="radio w-1/2">
                <input className="radio-input bg-grey-200 mt-4 p-2 visually-hidden" value="Full Time" id="full-time" name="Kind Of Work" type="radio"/>
                <label className="radio-label text-center block border-2 border-r border-grey-200 w-full p-2" htmlFor="full-time">Full Time Work</label>
              </div>
              <div className="radio w-1/2">
                <input className="radio-input bg-grey-200 mt-4 p-2 visually-hidden" value="Part Time" id="part-time" name="Kind Of Work" type="radio"/>
                <label className="radio-label text-center block border-2 border-l border-grey-200 w-full p-2" htmlFor="part-time">Part Time Work</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 mt-8">
          <label htmlFor="position" className="font-bold">What position are you applying for?</label>
          <div className="select mt-4 relative">
              <select className="bg-grey-200 appearance-none w-full p-2" name="position" id="position">
                <option value="No Answer" selected>Make a selection...</option>
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
        <div className="flex flex-col flex-1 mt-8">
          <label htmlFor="availability" className="font-bold">What times would you be available to work?</label>
          <div className="select mt-4 relative">
              <select className="bg-grey-200 appearance-none w-full p-2" name="availability" id="availability">
                <option value="No Answer" selected>Make a selection...</option>
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
        <div className="flex flex-col flex-1 mt-8">
          <label htmlFor="experience" className="font-bold">How many years of experience?</label>
          <input className="bg-grey-200 mt-4 p-2" name="experience" id="experience" type="text"/>
        </div>
        <div className="flex flex-col flex-1 mt-8">
          <label htmlFor="good-fit" className="font-bold">How would you be a good fit for our family? <span className="font-normal">(In three sentences or less)</span></label>
          <textarea name="fit" id="good-fit" className="bg-grey-200 mt-4 p-2 h-32" id="good-fit" />
        </div>
        <div className="text-right">
          <input type="submit" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 uppercase font-bold cursor-pointer text-right mt-8" value="Submit Application"/>
        </div>
      </form>
    </section>
  </Layout>
);

export default HiringPage;
