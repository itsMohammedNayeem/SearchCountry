import React from "react";
import countries from "../data/countries.json";
import "./searchCountry.css";

const SearchCountry = () => {
  const [search, setSearch] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState([]);

  return (
    <div>
      <input
        className="search-input"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setFilteredCountries(
            countries.filter(({ country, city }) =>
              country.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
      />
      <div className="search-results">
        {filteredCountries.map(({ country, city }) => (
          <div className="search-result" key={country}>
            <div className="search-result-country">{country}</div>
            {/* <div className="search-result-city">{city}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCountry;
