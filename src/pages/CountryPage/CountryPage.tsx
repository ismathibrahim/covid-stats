import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCountry } from "../../api";

import { Summary, PieChart } from "../../components";
import { CountryStats } from "../../lib/types";
import styles from "./CountryPage.module.css";

type URLParams = {
  countryId: string;
};

const CountryPage = () => {
  const params = useParams<URLParams>();

  const [country, setCountry] = useState<CountryStats>();

  useEffect(() => {
    const fetchAPI = async () => {
      setCountry(await fetchCountry(params.countryId));
    };
    fetchAPI();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.countryPage}>
      {country ? (
        <>
          <h1>{country.country}</h1>
          <Summary data={country} />
          <div className={styles.chartContainer}>
            <PieChart
              confirmed={country.cases}
              recovered={country.recovered}
              active={country.active}
              deaths={country.deaths}
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryPage;
