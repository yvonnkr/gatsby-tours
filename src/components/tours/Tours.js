import React from "react";
import SingleTour from "./SingleTour";
import styles from "../../css/items.module.css";

const Tours = ({ tours }) => {
  return (
    <section className={styles.tours}>
      <h2>our tours</h2>
      <div className={styles.center}>
        {tours.map(({ node }) => (
          <SingleTour key={node.id} tour={node} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
