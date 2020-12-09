import React from "react";
import { Card } from "../../components";

import styles from "./Summary.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div className={styles.container}>
      <Card
        title="Confirmed"
        number={confirmed.value}
        description="Number of confirmed infections"
      />
      <Card
        title="Recovered"
        number={recovered.value}
        description="Number of recoveries "
      />
      <Card
        title="Deaths"
        number={deaths.value}
        description="Number of deaths"
      />
    </div>
  );
};

export default Cards;
