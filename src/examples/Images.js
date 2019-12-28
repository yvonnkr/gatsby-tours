import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import basicImg from "../images/desk.jpg"

//graphql query
const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "bed.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluid: file(relativePath: { eq: "bookcase.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

//component
const Images = () => {
  const { fixed, fluid } = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={basicImg} alt="basic" className="basic" />
      </article>
      <article>
        <h3>Fixed Image/blur</h3>
        <Img fixed={fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid Image/svg</h3>
        <Img fluid={fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

//styled comp
const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  .basic {
    width: 100%;
  }
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
`

export default Images
