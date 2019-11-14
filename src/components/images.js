import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = ({ image, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      hiring: file(relativePath: { eq: "images/hiring.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data[image].childImageSharp.fluid}
      className="w-full h-full"
      {...props}
    />
  )
}
