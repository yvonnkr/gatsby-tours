import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const HeaderStatic = () => (
  <StaticQuery
    query={getData}
    render={data => {
      const { title, description } = data.site.siteMetadata
      return (
        <div>
          <h2>Title: {title} </h2>
          <p>Description: {description} </p>
        </div>
      )
    }}
  />
)

export default HeaderStatic
