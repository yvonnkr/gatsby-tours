import React from "react"
import { Link } from "gatsby"
import { FaMap } from "react-icons/fa"
import Image from "gatsby-image"
import PropTypes from "prop-types"

import styles from "../../css/tour.module.css"

const SingleTour = ({ tour }) => {
  const { name, country, slug, images, price, days } = tour
  const mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name} />
        <Link className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from £{price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

//validate props
SingleTour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object),
  }),
}

export default SingleTour
