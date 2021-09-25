import axios from "axios";

const BASE_URL = "https://disease.sh/v3/covid-19";

export const fetchGlobalStats = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/all`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/countries`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountry = async (country: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/countries/${country}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
