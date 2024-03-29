import React, { useState } from "react";
import { Link } from "react-router-dom";
import { KeyboardArrowDownRounded } from "@material-ui/icons";
import { KeyboardArrowUpRounded } from "@material-ui/icons";
import classnames from "classnames";

import styles from "./CountriesTable.module.css";
import { CountryStats } from "../../lib/types";

const orderBy = (
  countries: CountryStats[],
  value: string,
  direction: string
) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }: { direction: string }) => {
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

const CountriesTable = ({ countries }: { countries: CountryStats[] }) => {
  const [direction, setDirection] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection("");
    }
  };

  const setValueAndDirection = (value: string) => {
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
              <div>Cases per mil.</div>
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
              <div>Deaths per mil.</div>
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
                  <div className={styles.cell}>
                    {country.cases.toLocaleString() || "N/A"}
                  </div>
                  <div className={classnames(styles.cell, styles.hidden_small)}>
                    {country.recovered.toLocaleString() || "N/A"}
                  </div>
                  <div className={classnames(styles.cell, styles.hidden_small)}>
                    {country.active.toLocaleString() || "N/A"}{" "}
                  </div>
                  <div className={classnames(styles.cell, styles.hidden_small)}>
                    {country.deaths.toLocaleString() || "N/A"}{" "}
                  </div>
                  <div
                    className={classnames(
                      styles.cell,
                      styles.hidden_small,
                      styles.hidden_medium
                    )}
                  >
                    {country.casesPerOneMillion.toLocaleString() || "N/A"}{" "}
                  </div>
                  <div
                    className={classnames(
                      styles.cell,
                      styles.hidden_small,
                      styles.hidden_medium
                    )}
                  >
                    {country.deathsPerOneMillion.toLocaleString() || "N/A"}{" "}
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
