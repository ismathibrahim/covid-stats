import React from "react";
import { Card } from "../../components";

import styles from "./Summary.module.css";

const Cards = ({ data: { cases, recovered, deaths, active } }) => {
  if (!cases) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Card
        accentColor="var(--color-purple)"
        title="Confirmed"
        number={cases}
        description="Number of confirmed infections"
      />
      <Card
        accentColor="var(--color-green)"
        title="Recovered"
        number={recovered}
        description="Number of recoveries "
      />
      <Card
        accentColor="var(--color-yellow)"
        title="Active"
        number={active}
        description="Number of active infections"
      />
      <Card
        accentColor="var(--color-red)"
        title="Deaths"
        number={deaths}
        description="Number of deaths"
      />
    </div>
  );
};

export default Cards;
