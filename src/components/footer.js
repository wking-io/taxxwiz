import React from "react"
import { Link } from "gatsby"
import VisuallyHidden from "@reach/visually-hidden"

import Logo from "./logo"
import { ReviewForm } from "./reviews"
import { EhlIcon, ExternalIcon, YoutubeIcon, FacebookIcon } from "./icons"

const Footer = ({ label }) => (
  <footer className="bg-black text-white">
    <div className="flex flex-col lg:flex-row w-5/6 mx-auto py-20">
      <div className="mb-12 lg:mb-0 lg:mr-8 flex-1">
        <Logo
          className="h-20 md:h-24 w-auto mb-12"
          theme="primary-light"
          withText
        />
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <address className="not-italic mb-8">
              <p className="font-bold text-lg leading-snug mb-8">
                242 Peace Church Rd #A
                <br />
                Wetumpka, AL 36093
              </p>
              <p>
                <strong>Hours:</strong>
              </p>
              <p className="mb-4">Mon - Fri: 8:30am-4:30pm</p>
              <p>
                <strong>Phone:</strong>
              </p>
              <p className="mb-4">334-567-4223</p>
              <p>
                <strong>Fax:</strong>
              </p>
              <p className="mb-4">877-395-9876</p>
            </address>
            <div className="flex items-end mb-12 md:mb-0">
              <EhlIcon className="h-16 mr-6" />
              <div>
                <p className="font-bold mb-3">Company NMLS ID:</p>
                <p>
                  <a
                    className="underline hover:no-underline flex items-center leading-none"
                    href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1586368"
                    data-track
                    data-event-category="NMLS"
                    data-event-action="Viewed"
                    data-event-label={`${label} - Company`}
                  >
                    1586368 <ExternalIcon className="ml-2 h-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <nav className="flex flex-col md:w-1/3 lg:w-auto xl:w-1/3">
            <ul className="flex-1 mb-12 md:mb-0">
              <li className="mb-4">
                <Link className="uppercase font-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link className="uppercase font-bold" to="/purchase">
                  Purchase
                </Link>
              </li>
              <li className="mb-4">
                <Link className="uppercase font-bold" to="/refinance">
                  Refinance
                </Link>
              </li>
              <li className="mb-4">
                <Link className="uppercase font-bold" to="/team">
                  Team
                </Link>
              </li>
              <li className="mb-4">
                <Link className="uppercase font-bold" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mb-12 md:mb-0">
              <p className="font-bold mb-3">Follow Us:</p>
              <ul className="flex">
                <li className="mr-6">
                  <a
                    href="https://www.youtube.com/channel/UCvah-OlcvVDehbAy9Tu2Rtw"
                    data-track
                    data-event-category="Social"
                    data-event-action="Viewed"
                    data-event-label={`${label} - Youtube`}
                  >
                    <YoutubeIcon
                      className="h-4 text-white hover:text-grey-400"
                      aria-hidden
                    />
                    <VisuallyHidden>YouTube</VisuallyHidden>
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="https://www.facebook.com/alabamahomemortgagellc/"
                    data-track
                    data-event-category="Social"
                    data-event-action="Viewed"
                    data-event-label={`${label} - Facebook`}
                  >
                    <FacebookIcon
                      className="h-4 text-white hover:text-grey-400"
                      aria-hidden
                    />
                    <VisuallyHidden>Facebook</VisuallyHidden>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="lg:ml-8 flex-1 w-full lg:max-w-md border-2 border-grey-600 p-6">
        <p className="text-lg uppercase font-bold mb-4">Leave a review:</p>
        <ReviewForm dark label={label} />
      </div>
    </div>
    <div className="w-5/6 mx-auto border-t-2 border-grey-600 py-6 text-sm flex flex-col md:flex-row items-center">
      <p className="flex-1 mb-4 md:mb-0">
        &copy; Alabama Home Mortgage Loans 2019
      </p>
      <ul className="flex items-center">
        <li className="mr-8">
          <Link
            className="no-underline hover:underline hover:text-white"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            className="no-underline hover:underline hover:text-white"
            to="/terms-of-service"
          >
            Terms of Service
          </Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
