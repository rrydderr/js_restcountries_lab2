import { useState, useEffect } from "react"
import Countries from "../components/Country";
import CountriesList from "../components/CountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        updateCountryData();
    }, []);

    const updateCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();
        setCountries(data);
    }

    const updateVisitedlist = (countryName) => {
        const filteredCountriesList = countries.filter((country) => {
            return country.name.common === countryName
        })

        setVisitedCountries([...visitedCountries, filteredCountriesList[0]]);
    }

    return (
        <>
        {countries ? <CountriesList countries={countries} updateVisitedList={updateVisitedlist}/> : <p>Loading</p>}
        {countries ? <CountriesList countries={visitedCountries}/> : <p>Loading</p>}
       </>
    );

};

export default CountriesContainer;