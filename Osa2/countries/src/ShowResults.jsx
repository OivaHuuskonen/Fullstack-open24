import React from 'react';

const ShowResults = ({ filteredCountries, handleShowCountryDetails, selectedCountry }) => {
  if (filteredCountries.length > 10) {
    return <div>Too many matches, try again</div>;
  }

  if (selectedCountry) {
    // Don't render anything if a country is selected
    return null;
  }

  return (
    <div className="results">
      {filteredCountries.length <= 10 && (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.name.common}>
              {country.name.common}{' '}
              <button onClick={() => handleShowCountryDetails(country)}>show</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowResults;






/*const ShowResults = ({ filteredCountries, handleShowCountryDetails }) => {
    
      return (
        <div className="results">
          {filteredCountries.length > 10 ? (
          <div>Too many matches, try again</div>
          ) : ( 
            <div>
          {filteredCountries.length <= 10 && (
            <div>
              {filteredCountries.map((country) => (
                <div key={country.name.common}>
                  {country.name.common}{' '}
                  <button onClick={() => handleShowCountryDetails(country)}>show</button>
                </div>
              ))}
            </div>
          )}
        </div>
          )}
          </div>
      );
    };

  export default ShowResults; */