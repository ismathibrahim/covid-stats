import React from "react";
import CountUp from "react-countup";

import styles from "./Card.module.css";

const Card = ({ title, number, description, accentColor }) => {
  return (
    <div className={styles.card}>
      <h4 style={{ color: accentColor }}>{title}</h4>
      <h1>{<CountUp start={0} end={number} duration={1.5} separator="," />}</h1>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Card;
