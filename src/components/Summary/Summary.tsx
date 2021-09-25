import React from "react";
import { Card } from "..";
import { GlobalStats } from "../../lib/types";

import styles from "./Summary.module.css";

interface Props {
  data: GlobalStats | undefined;
}

const Summary = ({ data }: Props) => {
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <Card
        accentColor="var(--color-purple)"
        title="Confirmed"
        number={data?.cases}
        description="Number of confirmed infections"
      />
      <Card
        accentColor="var(--color-green)"
        title="Recovered"
        number={data?.recovered}
        description="Number of recoveries "
      />
      <Card
        accentColor="var(--color-yellow)"
        title="Active"
        number={data?.active}
        description="Number of active infections"
      />
      <Card
        accentColor="var(--color-red)"
        title="Deaths"
        number={data?.deaths}
        description="Number of deaths"
      />
    </div>
  );
};

export default Summary;
