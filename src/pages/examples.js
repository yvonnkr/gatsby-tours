import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/Layout"
import HeaderHooks from "../examples/Header-Hooks"
import HeaderStatic from "./../examples/Header-Static"

const examples = props => {
  console.log(props)

  const { data } = props.data.site.siteMetadata
  return (
    <Layout>
      <h1>*****UseStaticQuery Hook******</h1>
      <HeaderHooks />
      <h1>*****Static Query*******</h1>
      <HeaderStatic />
      <h1>***Page Query******</h1>
      <p>Name: {data.name} </p>
      <p>Age: {data.age} </p>
    </Layout>
  )
}

//for page query
export const query = graphql`
  {
    site {
      siteMetadata {
        data {
          age
          name
        }
      }
    }
  }
`

export default examples
