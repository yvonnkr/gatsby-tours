import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/Layout"
import Tours from "./../components/tours/Tours"

const tours = ({ data }) => {
  return (
    <Layout>
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}

//page query
export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          id: contentful_id
          name
          price
          country
          days
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours
