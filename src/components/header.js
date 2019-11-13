import { Link } from "gatsby"
import React from "react"
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import VisuallyHidden from "@reach/visually-hidden"

import Logo from "./logo"

const links = [
  {
    id: "home",
    name: "Save More Money",
    to: "/",
  },
  {
    id: "hiring",
    name: "We Are Hiring",
    to: "/hiring",
  },
]

const Header = ({ label }) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <header className="flex items-center absolute top-0 left-0 w-full z-50">
          <Link
            className="absolute top-0 left-0 ml-12 mt-8 block"
            to="/"
            data-track
            data-event-category="Navigation"
            data-event-action="Viewed Home"
            data-event-label={`${label} - Logo`}
          >
            <Logo
              theme={"black"}
              className="h-16 hidden sm:block"
            />
          </Link>
          <nav
            className={`flex-1 mr-4 text-right`}
          >
            <MenuButton className="pt-8 p-4 relative z-50">
              <VisuallyHidden>{isOpen ? "Close" : "Open"} Menu</VisuallyHidden>
              <span
                className={`hamburger`}
                aria-hidden
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </MenuButton>
            <MenuList className="fixed inset-0 bg-dark-o z-40 flex flex-col justify-end p-12 sm:p-16 md:p-20 lg:p-24">
              {links.map(({ id, name, to }) => (
                <MenuLink
                  as={Link}
                  to={to}
                  getProps={({ isCurrent }) =>
                    isCurrent
                      ? {
                          className: `text-2xl md:text-3xl text-white uppercase font-semibold p-4 inline-block opacity-100 hover:opacity-50`,
                        }
                      : {
                          className: `text-2xl md:text-3xl text-white uppercase font-semibold p-4 inline-block opacity-50 hover:opacity-100`,
                        }
                  }
                >
                  {name}
                </MenuLink>
              ))}
            </MenuList>
          </nav>
        </header>
      )}
    </Menu>
  )
}

export default Header
