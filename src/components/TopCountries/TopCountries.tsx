import React from "react";

import { CountryStats } from "../../lib/types";
import styles from "./TopCountries.module.css";

const TopCountry = ({ country }: { country: CountryStats }) => (
  <div className={styles.country}>
    <p>{country.country}</p>
    <div className={styles.figuresContainer}>
      <div>
        <p className={styles.title} style={{ color: "var(--color-purple)" }}>
          Confirmed
        </p>
        <p className={styles.digits}>{country.cases.toLocaleString()}</p>
      </div>
      <div>
        <p className={styles.title} style={{ color: "var(--color-green)" }}>
          Recoveries
        </p>
        <p className={styles.digits}>{country.recovered.toLocaleString()}</p>
      </div>
      <div>
        <p className={styles.title} style={{ color: "var(--color-red)" }}>
          Deaths
        </p>
        <p className={styles.digits}>{country.deaths.toLocaleString()}</p>
      </div>
    </div>
  </div>
);

const TopCountries = ({ countries }: { countries: CountryStats[] }) => {
  return (
    <div className={styles.topCountries}>
      <h4>Top countries affected</h4>
      {countries ? (
        countries.map((country: CountryStats) => (
          <TopCountry country={country} key={country.countryInfo._id} />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default TopCountries;
