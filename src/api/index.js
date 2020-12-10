import axios from "axios";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`https://disease.sh/v3/covid-19/all`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      `https://disease.sh/v3/covid-19/countries`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountry = async (country) => {
  try {
    const { data } = await axios.get(
      `https://disease.sh/v3/covid-19/countries/${country}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
