import { Link } from "gatsby"
import React from "react"

import Logo from "./logo"
import { ContactIcon } from "./icons"


const Header = ({ label }) => {
  return (
    <header className="flex items-center w-full pl-24 pr-16 mt-8">
      <Link
        className="block"
        to="/"
        data-track
        data-event-category="Navigation"
        data-event-action="Viewed Home"
        data-event-label={`${label} - Logo`}
      >
        <Logo
          theme={"black"}
          className="h-4 hidden sm:block"
        />
      </Link>
      <nav
        className={`flex-1 text-right flex items-center justify-end`}
      >
        <Link
          to="/"
          className="text-black hover:underline p-4 inline-block mr-12"
        >
          Save More Money
        </Link>
        <Link
          to='/hiring'
          className="link--highlight text-white p-4 inline-block mr-12"
        >
          We Are Hiring
        </Link>
        <Link
          to='/contact'
          className="h-12 p-4 -mr-4 text-primary hover:text-primary-dark"
        >
          <ContactIcon className="w-auto h-full" />
        </Link>
      </nav>
    </header>
  )
}

export default Header
