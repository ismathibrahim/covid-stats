import React, { useEffect, useState } from "react";

import {
  Summary,
  Choropleth,
  TopCountries,
  CountriesTable,
  SearchInput,
} from "../../components";

import styles from "./HomePage.module.css";

import { fetchGlobalStats, fetchCountries } from "../../api";
import { CountryStats, GlobalStats, MapCountry } from "../../lib/types";

const HomePage = () => {
  const [globalStats, setGlobalStats] = useState<GlobalStats>();
  const [countries, setCountries] = useState<CountryStats[]>([]);
  const [topCountries, setTopCountries] = useState<CountryStats[]>([]);
  const [mapData, setMapData] = useState<MapCountry[]>([]);

  useEffect(() => {
    const fetchAPIAll = async () => {
      setGlobalStats(await fetchGlobalStats());
    };
    const fetchAPICountries = async () => {
      const unFilteredCountries = await fetchCountries();

      setMapData(
        await unFilteredCountries.map((country: CountryStats) => ({
          id: country.countryInfo.iso3,
          value: country.cases,
        }))
      );

      setTopCountries(
        await unFilteredCountries
          .sort((a: CountryStats, b: CountryStats) => {
            return b.cases - a.cases;
          })
          .slice(0, 3)
      );

      setCountries(
        await unFilteredCountries.filter(
          (country: CountryStats) =>
            country.country !== "Diamond Princess" &&
            country.country !== "MS Zaandam"
        )
      );
    };
    fetchAPIAll();
    fetchAPICountries();
  }, []);

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter((country: CountryStats) =>
    country.country.toLowerCase().includes(keyword)
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.homePage}>
      <h1>Global cases</h1>
      <Summary data={globalStats} />
      <div className={styles.overviewArea}>
        <Choropleth data={mapData} />
        <TopCountries countries={topCountries} />
      </div>
      <SearchInput placeholder="Filter countries" onChange={onInputChange} />
      <CountriesTable countries={filteredCountries} />
    </div>
  );
};

export default HomePage;
