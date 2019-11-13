import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getHomes = key =>
  useStaticQuery(graphql`
    query {
      latest: allHomesJson(limit: 6) {
        edges {
          node {
            price
            beds
            baths
            footage
            address
            image
            source
          }
        }
      }
      all: allHomesJson {
        edges {
          node {
            price
            beds
            baths
            footage
            address
            image
            source
          }
        }
      }
    }
  `)[key]

const Home = ({ price, beds, baths, footage, address, image, source }) => (
  <li className="home flex flex-col shadow hover:shadow-md">
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      data-track
      data-event-category="Listing"
      data-event-action="Viewed"
      data-event-label={address}
    >
      <div className="aspect-4:3">
        <img src={image} alt="Home Preview" className="aspect-content" />
      </div>
      <div className="flex items-center p-2">
        <p className="font-bold text-lg">{price}</p>
        <div className="flex text-sm flex-1 justify-end items-center">
          <p className="leading-none px-2 border-r border-grey-400">
            {beds} bds
          </p>
          <p className="leading-none px-2 border-r border-grey-400">
            {baths} ba
          </p>
          <p className="leading-none px-2">{footage} sqft</p>
        </div>
      </div>
      <div>
        <p className="bg-grey-200 text-grey-700 text-sm font-semibold p-2">
          {address}
        </p>
      </div>
    </a>
  </li>
)

export const LatestHomes = props => {
  const homes = getHomes("latest")

  return (
    <div {...props}>
      <ul className="flex flex-wrap justify-between">
        {homes.edges.map(({ node }, i) => (
          <Home key={node.name + i} {...node} />
        ))}
      </ul>
    </div>
  )
}
