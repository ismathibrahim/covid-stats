export interface GlobalStats {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
  [key: string]: any;
}

export interface CountryInfo {
  _id: number;
  flag: string;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
}

export interface CountryStats extends GlobalStats {
  continent: string;
  country: string;
  countryInfo: CountryInfo;
}

export interface MapCountry {
  id: string;
  cases: number;
}
