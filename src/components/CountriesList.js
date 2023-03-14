import Countries from "./Countries";

const CountriesList = ({ countries }) => {
  const countriesMap = countries.map((countries, index) => {
    return <Countries countries={countries} key={index}/>;
  });

  return <ul>{countriesMap}</ul>;
};

export default CountriesList;
