import React, { Component } from "react"
import Layout from "./../components/Layout"
import styles from "./blog.module.css"

export default class blog extends Component {
  render() {
    return (
      <Layout>
        <h1 className={styles.title}>Blog Page</h1>
      </Layout>
    )
  }
}
