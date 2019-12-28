import React from "react"

import Layout from "./../components/Layout"
import Images from "../examples/Images"

const images = ({ data }) => {
  return (
    <Layout>
      <h2>This is images page</h2>
      <Images />
    </Layout>
  )
}

export default images
