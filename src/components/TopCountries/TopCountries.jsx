import React from "react";

import styles from "./TopCountries.module.css";

const TopCountry = ({ country }) => (
  <div className={styles.country}>
    <p>{country.country}</p>
    <div className={styles.figuresContainer}>
      <div>
        <p className={styles.title} style={{ color: "var(--color-purple)" }}>
          Confirmed
        </p>
        <p className={styles.digits}>{country.cases}</p>
      </div>
      <div>
        <p className={styles.title} style={{ color: "var(--color-green)" }}>
          Recoveries
        </p>
        <p className={styles.digits}>{country.recovered}</p>
      </div>
      <div>
        <p className={styles.title} style={{ color: "var(--color-red)" }}>
          Deaths
        </p>
        <p className={styles.digits}>{country.deaths}</p>
      </div>
    </div>
  </div>
);

const TopCountries = ({ countries }) => {
  return (
    <div className={styles.topCountries}>
      <h4>Top countries affected</h4>
      {countries ? (
        countries.map((country) => <TopCountry country={country} />)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default TopCountries;
