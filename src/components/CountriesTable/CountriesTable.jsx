import React, { useState } from "react";
import { Link } from "react-router-dom";
import { KeyboardArrowDownRounded } from "@material-ui/icons";
import { KeyboardArrowUpRounded } from "@material-ui/icons";
import classnames from "classnames";

import styles from "./CountriesTable.module.css";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div className={styles.countriesTable}>
      {countries ? (
        <>
          <div className={styles.headings}>
            <div className={classnames(styles.heading_flag)}></div>
            <button
              onClick={() => setValueAndDirection("country")}
              className={classnames(styles.heading_button)}
            >
              <div>Name</div>
              {value === "country" && <SortArrow direction={direction} />}
            </button>
            <button
              onClick={() => setValueAndDirection("cases")}
              className={styles.heading_button}
            >
              <div>Confirmed</div>
              {value === "cases" && <SortArrow direction={direction} />}
            </button>
            <button
              onClick={() => setValueAndDirection("recovered")}
              className={classnames(styles.heading_button, styles.hidden_small)}
            >
              <div>Recovered</div>
              {value === "recovered" && <SortArrow direction={direction} />}
            </button>
            <button
              onClick={() => setValueAndDirection("active")}
              className={classnames(styles.heading_button, styles.hidden_small)}
            >
              <div>Active</div>
              {value === "active" && <SortArrow direction={direction} />}
            </button>
            <button
              onClick={() => setValueAndDirection("deaths")}
              className={classnames(styles.heading_button, styles.hidden_small)}
            >
              <div>Deaths</div>
              {value === "deaths" && <SortArrow direction={direction} />}
            </button>
            <button
              onClick={() => setValueAndDirection("casesPerOneMillion")}
              className={classnames(
                styles.heading_button,
                styles.hidden_small,
                styles.hidden_medium
              )}
            >
              <div>Cases per m.</div>
              {value === "casesPerOneMillion" && (
                <SortArrow direction={direction} />
              )}
            </button>
            <button
              onClick={() => setValueAndDirection("deathsPerOneMillion")}
              className={classnames(
                styles.heading_button,
                styles.hidden_small,
                styles.hidden_medium
              )}
            >
              <div>Deaths per m</div>
              {value === "deathsPerOneMillion" && (
                <SortArrow direction={direction} />
              )}
            </button>
          </div>

          {orderedCountries.map((country) => (
            <Link
              to={`/country/${country.countryInfo.iso3}`}
              key={country.countryInfo.iso3}
            >
              <div>
                <div className={styles.row}>
                  <div className={styles.flag}>
                    <img src={country.countryInfo.flag} alt={country.country} />
                  </div>
                  <div className={styles.cell}>{country.country}</div>
                  <div className={styles.cell}>{country.cases || 0}</div>
                  <div className={classnames(styles.cell, styles.hidden_small)}>
                    {country.recovered || 0}
                  </div>
                  <div className={classnames(styles.cell, styles.hidden_small)}>
                    {country.active || 0}{" "}
                  </div>
                  <div className={classnames(styles.cell, styles.hidden_small)}>
                    {country.deaths || 0}{" "}
                  </div>
                  <div
                    className={classnames(
                      styles.cell,
                      styles.hidden_small,
                      styles.hidden_medium
                    )}
                  >
                    {country.casesPerOneMillion || 0}{" "}
                  </div>
                  <div
                    className={classnames(
                      styles.cell,
                      styles.hidden_small,
                      styles.hidden_medium
                    )}
                  >
                    {country.deathsPerOneMillion || 0}{" "}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountriesTable;
