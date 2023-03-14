import { useState, useEffect} from "react";
import CountriesList from "../components/CountriesList";


const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([{name: {common:"France"}}]);


useEffect(() => {
    updateCountryData(); },[]);


    const updateCountryData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error(error));
    }

    const updateVisitedList =(countryName) => {
      const filteredList = countries.filter((countries) => {
        return countries.name.common === countryName;
      })
      console.log(filteredList[0]);
      
    }

    return (
       <div className="container">
       <h2>All Countries</h2>
       {countries ? <CountriesList countries={countries} updateVisitedList={updateVisitedList} /> : <p>Loading</p>}
       {countries ? <CountriesList countries={visitedCountries} /> : <p>Loading</p>}
       </div>
    )
}

export default CountriesContainer



// import { useState, useEffect } from "react";

// const CountriesContainer = () => {
//   const [countries, setCountries] = useState(null);
//   const [visitedCountries, setVisitedCountries] = useState([]);

//   useEffect(() => {
//     updateCountryData();
//   }, []);

//   const updateCountryData = () => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => setCountries(data))
//       .catch((error) => console.error(error));
//   };

//   const handleCountryClick = (code) => {
//     if (!visitedCountries.includes(code)) {
//       setVisitedCountries([...visitedCountries, code]);
//     }
//   };

//   const handleAddToVisited = (code) => {
//     if (!visitedCountries.includes(code)) {
//       setVisitedCountries([...visitedCountries, code]);
//     }
//   };

//   return (
//     <>                           
//       {countries && (
//         <>
//           <h2>Countries to visit:</h2>
//           <ul>
//             {countries.map((country) => (
//               <li key={country.cca3}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={visitedCountries.includes(country.cca3)}
//                     onChange={() => handleCountryClick(country.cca3)}
//                   />
//                   {country.name.common}
//                 </label>
//                 <button
                                                                                                                                                                                                                                                                                                                                                                //                   onClick={() => handleAddToVisited(country.cca3)}
                                                                                                                                                                                                                                                                                                                                                                //                   disabled={visitedCountries.includes(country.cca3)}
//                 >
//                   Add to Visited
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <h2>Visited countries:</h2>
//           <ul>
//             {visitedCountries.map((code) => (
//               <li key={code}>{countries.find((country) => country.cca3 === code).name.common}</li>
//             ))}
//           </ul>
//         </>
//       )}
//     </>
//   );
// };

// export default CountriesContainer;
