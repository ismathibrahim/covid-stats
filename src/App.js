import React, { Component } from "react";

import { Summary, CountryPicker, Chart } from "./components";

import styles from "./App.module.css";

import { fetchData } from "./api/index.js";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    console.log(country);
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1>COVID-19 Statistics</h1>
        <p>
          Data source:{" "}
          <a href="https://covid19.mathdro.id/api/">covid19.mathdro.id/api/</a>
        </p>
        <Summary data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
