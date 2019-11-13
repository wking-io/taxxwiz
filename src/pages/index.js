import React, { useState } from "react"
import { Link } from "gatsby"
import { DialogOverlay, DialogContent } from "@reach/dialog"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Image } from "../components/images"
import { ArrowIcon } from "../components/icons"
import { LatestReviews } from "../components/reviews"
import { YoutubeVideo } from "../components/video"
import { QUOTE_URL, PHONE_URL } from "../utils"

const HomeCta = ({ label }) => (
  <section className="home--hero">
    <div className="w-full h-full absolute top-0 left-0">
      <Image image="kitchen" />
    </div>
    <div className="h-full flex flex-col lg:flex-row relative z-10">
      <div className="flex flex-col justify-end flex-1 bg-light-o p-8 md:p-16 lg:p-20">
        <div>
          <h2 className="flex flex-col text-lg md:text-2xl leading-tight mb-8 lg:mb-12">
            <span>I want to...</span>
            <span className="text-hero-heading font-serif font-bold">
              Purchase
            </span>
            <span>my dream home.</span>
          </h2>
          <div>
            <a
              href={QUOTE_URL}
              className="btn btn--outline mr-8"
              data-track
              data-event-category="Application"
              data-event-action="Started"
              data-event-label={`Home - Purchase - ${label}`}
            >
              Apply Now
            </a>
            <Link
              to="/purchase"
              className="link"
              data-track
              data-event-category="Learn More"
              data-event-action="Viewed Learn More"
              data-event-label={`Home - Purchase - ${label}`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end flex-1 bg-primary-o p-8 md:p-16 lg:p-20 text-white">
        <div>
          <h2 className="flex flex-col text-lg md:text-2xl leading-tight mb-8 lg:mb-12">
            <span>I want to...</span>
            <span className="text-hero-heading font-serif font-bold">
              Refinance
            </span>
            <span>my current home.</span>
          </h2>
          <div>
            <a
              href={QUOTE_URL}
              className="btn btn--outline-light mr-8"
              data-track
              data-event-category="Application"
              data-event-action="Started"
              data-event-label={`Home - Refinance - ${label}`}
            >
              Apply Now
            </a>
            <Link
              to="/refinance"
              className="link link--light"
              data-track
              data-event-category="Learn More"
              data-event-action="Viewed Learn More"
              data-event-label={`Home - Refinance - ${label}`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Layout label="Home">
      <SEO />
      <HomeCta label="top" />
      <section className="hidden md:flex bg-black text-white py-6 px-8 items-center">
        <p className="flex-1 m-0">
          <strong className="font-serif">
            Not sure what your best option may be?
          </strong>{" "}
          Learn about how we can help you below.
        </p>
        <div className="w-6">
          <ArrowIcon direction="down" className="w-full h-auto" />
        </div>
      </section>
      <section className="flex flex-col-reverse w-10/12 mx-auto lg:flex-row lg:items-center lg:w-11/12 lg:mr-0 lg:ml-auto mt-10 mb-16 md:my-16 lg:my-32 xl:my-40">
        <div className="flex-1 max-w-2xl flex flex-col">
          <p className="uppercase text-primary mb-2 md:text-lg font-semibold">
            Our Mission
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-6">
            There is a difference in mortgage companies.
          </h2>
          <p className="font-serif leading-relaxed mb-12 text-grey-800">
            At Alabama Home Mortgage, we strive to make your mortgage lending
            experience as stress-free as possible. We understand that purchasing
            or refinancing a home can be intimidating. However, our goal is to
            partner with you to customize a plan that fits your needs and puts
            your mind at ease. We work hard to exceed customer expectations on
            time, every time.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row flex-1">
            <a
              className="capitalize btn btn--primary py-4 px-12 mb-4 md:mb-0 md:mr-6 lg:mb-4 lg:mr-0 xl:mr-6 xl:mb-0"
              href={QUOTE_URL}
              data-track
              data-event-category="Application"
              data-event-action="Started"
              data-event-label="Home - Mission"
            >
              Apply for a loan now
            </a>
            <a
              className="capitalize btn btn--outline py-4 px-12"
              href={PHONE_URL}
              data-track
              data-event-category="Learn More"
              data-event-action="Called"
              data-event-label="Home - Mission"
            >
              Call us to learn more
            </a>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="aspect-16:9 flex-1 mb-8 lg:mb-0 lg:ml-16"
          data-track
          data-event-category="Video"
          data-event-action="Opened"
          data-event-label="Home - Mission"
        >
          <Image className="aspect-content arrow-image" image="building" />
        </button>
        <DialogOverlay
          className="fixed inset-0 flex items-center justify-center z-50 bg-dark-o"
          isOpen={isOpen}
          onDismiss={() => setOpen(false)}
        >
          <DialogContent className="w-5/6">
            <YoutubeVideo videoId="vG9EBcWBgP4" />
          </DialogContent>
        </DialogOverlay>
      </section>
      <section className="md:text-white bg-grey-100 md:text-center relative">
        <div className="md:aspect-5:3 xl:aspect-16:9">
          <div className="md:aspect-content">
            <Image image="homeTeam" />
          </div>
        </div>
        <div className="home--team w-10/12 mx-auto md:w-full md:absolute inset-0">
          <div className="max-w-4xl mx-auto md:px-16 py-16 lg:pt-24 xl:pt-32">
            <p className="text-primary md:text-grey-200 uppercase md:text-lg mb-2 font-semibold">
              Our Team
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              We are experienced, but more importantly we care.
            </h2>
            <p className="text-grey-800 md:text-grey-200 font-serif leading-relaxed mb-12">
              We are your neighbors. Alabama Home Mortgage is conveniently
              located in Wetumpka, AL. Our team of experienced and dedicated
              mortgage professionals were all born and raised in the River
              Region. We believe that securing a mortgage should not be a
              one-time transactional event. We work to establish a relationship
              with our customers to ensure they feel comfortable and confident
              to call on us again and refer their family and friends.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-4/5 mx-auto my-16 md:my-40">
        <div className="flex-1 max-w-3xl">
          <p className="uppercase text-primary mb-2 md:text-lg font-semibold">
            Our Reviews
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Past performance is the best indicator of future performance.
          </h2>
          <p className="font-serif leading-relaxed mb-12 text-grey-800">
            See what others say about their experience with Alabama Home
            Mortgage below.
          </p>
        </div>
        <LatestReviews />
      </section>
      <HomeCta label="bottom" />
    </Layout>
  )
}

export default IndexPage
