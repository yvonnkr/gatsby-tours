import React from "react"
import { Link } from "gatsby"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" className={styles.navItem}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/products" className={styles.navItem}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/examples" className={styles.navItem}>
            Examples
          </Link>
        </li>
        <li>
          <Link to="/images" className={styles.navItem}>
            Images
          </Link>
        </li>
        <li>
          <Link to="/tours" className={styles.navItem}>
            Tours
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
