import React, { useEffect, useState } from "react";

import {
  Summary,
  Chart,
  TopCountries,
  CountriesTable,
  SearchInput,
} from "../../components/";

import styles from "./HomePage.module.css";

import { fetchData, fetchCountries } from "../../api";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [topCountries, setTopCountries] = useState([]);
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const fetchAPIAll = async () => {
      setData(await fetchData());
    };
    const fetchAPICountries = async () => {
      const unFilteredCountries = await fetchCountries();

      setMapData(
        await unFilteredCountries.map((country) => ({
          id: country.countryInfo.iso3,
          value: country.cases,
        }))
      );

      setTopCountries(
        await unFilteredCountries
          .sort((a, b) => {
            return b.cases - a.cases;
          })
          .slice(0, 3)
      );

      setCountries(
        await unFilteredCountries.filter(
          (country) =>
            country.country !== "Diamond Princess" &&
            country.country !== "MS Zaandam"
        )
      );
    };
    fetchAPIAll();
    fetchAPICountries();
  }, []);

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.country.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.homePage}>
      <h1>Global cases</h1>
      <Summary data={data} />
      <div className={styles.overviewArea}>
        <Chart data={mapData} />
        <TopCountries countries={topCountries} />
      </div>
      <SearchInput placeholder="Filter countries" onChange={onInputChange} />
      <CountriesTable countries={filteredCountries} />
    </div>
  );
};

export default HomePage;
