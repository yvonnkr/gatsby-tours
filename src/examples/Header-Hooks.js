import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        more: data {
          age
          name
        }
      }
    }
  }
`

const HeaderHooks = () => {
  const data = useStaticQuery(getData)

  const { title, description, author, more } = data.site.siteMetadata
  return (
    <div>
      <h2>Title: {title} </h2>
      <h3>Author: {author}</h3>
      <p>{description}</p>
      <p>{more.age}</p>
    </div>
  )
}

export default HeaderHooks
