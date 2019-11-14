import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"

const Footer = ({ label }) => (
  <footer className="p-6 flex items-center">
    <Logo className="h-4 mr-6" />
    <p className="text-grey-500 flex-shrink-0">&copy; 2019 All Rights Reserved</p>
    <ul className="flex items-center flex-1 justify-end text-grey-500">
      <li><Link className="block hover:underline px-4" href="/privacy-policy">Privacy Policy</Link></li>
      <li><Link className="block hover:underline px-4 -mr-4" href="/terms-of-service">Terms Of Service</Link></li>
    </ul>
  </footer>
)

export default Footer
