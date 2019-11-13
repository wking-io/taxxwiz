import React from "react"
import VisuallyHidden from "@reach/visually-hidden"

import { LogoIcon, LogoIconWithText } from "./icons"

const getLogoProps = theme => {
  switch (theme) {
    case "dark":
      return {
        textColor: "white",
        logoColor: "black",
        noBackground: true,
      }
    case "light":
      return {
        textColor: "white",
        logoColor: "white",
        noBackground: true,
      }
    case "primary-light":
      return {
        textColor: "white",
        logoColor: "primary",
        noBackground: false,
      }
    default:
      return {
        textColor: "black",
        logoColor: "primary",
        noBackground: false,
      }
  }
}

const Logo = ({ theme = "default", withText, ...props }) => (
  <div {...props}>
    {withText ? (
      <LogoIconWithText
        aria-hidden
        className="h-full w-auto"
        {...getLogoProps(theme)}
      />
    ) : (
      <LogoIcon
        aria-hidden
        className="h-full w-auto"
        {...getLogoProps(theme)}
      />
    )}
    <VisuallyHidden>
      <h1>Alabama Home Mortgage Loans</h1>
    </VisuallyHidden>
  </div>
)

export default Logo
