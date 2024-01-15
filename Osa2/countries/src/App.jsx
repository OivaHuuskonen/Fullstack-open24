/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherApp from './WeatherApp';
//import ShowResults from './ShowResults'; // Import the ShowResults component
import CountryInfo from './CountryInfo'; // Import the CountryInfo component


const App = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);*/

 /* useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name && country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handleShowCountryDetails = (country) => {
    setSelectedCountry(country);
  };

//const showCountryOptions = !selectedCountry;

return (
  <div className='App'>
    find basic country information and weather <br></br>
    <input
      value={searchFilter}
      onChange={(e) => setSearchFilter(e.target.value)}
      placeholder="Search for a country ..."
    />

    {filteredCountries.length === 1 ? (
        <div>
          <CountryInfo country={filteredCountries[0]} />
          <WeatherApp selectedCountry={filteredCountries[0]} />
        </div>
       ) : (
       <>
      <ShowResults
        filteredCountries={filteredCountries}
        handleShowCountryDetails={handleShowCountryDetails}
      />
    {selectedCountry && (
      <div>
        <CountryInfo country={selectedCountry} />
        <WeatherApp selectedCountry={selectedCountry} />
    </div>
    )}
    </>
    )}
  </div>
 );
};*/

 /* useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name && country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handleShowCountryDetails = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className='App'>
      find basic country information and weather <br></br>
      <input
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        placeholder="Search for a country ..."
      />
      <div className="results">
        {filteredCountries.length > 10 ? (
          <div>Too many matches, try again</div>
        ) : (
          <>
            {filteredCountries.map((country) => (
              <div key={country.name.common}>
                {country.name.common}{' '}
                <button onClick={() => handleShowCountryDetails(country)}>show</button>
              </div>
            ))}
          </>
        )}
      </div>
      {selectedCountry && (
        <div>
          <CountryInfo country={selectedCountry} />
          <WeatherApp selectedCountry={selectedCountry} />
        </div>
      )}
    </div>
  );
};

export default App;*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherApp from './WeatherApp';
import CountryInfo from './CountryInfo'; // Import the CountryInfo component

const App = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name && country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  useEffect(() => {
    // Auto-select the single result, if available
    if (filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0]);
    } else {
      setSelectedCountry(null); // Deselect if there are multiple options
    }
  }, [filteredCountries]);

  const handleShowCountryDetails = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className='App'>
      find basic country information and weather <br></br>
      <input
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        placeholder="Search for a country ..."
      />
      {selectedCountry ? (
        <div>
          <CountryInfo country={selectedCountry} />
          <WeatherApp selectedCountry={selectedCountry} />
        </div>
      ) : (
        <div className="results">
          {filteredCountries.length > 10 ? (
            <div>Too many matches, try again</div>
          ) : (
            <>
              {filteredCountries.map((country) => (
                <div key={country.name.common}>
                  {country.name.common}{' '}
                  {filteredCountries.length === 1 ? (
                    // Render "show" button only when there are multiple options
                  <button onClick={() => handleShowCountryDetails(country)}>show</button>
                  ) : null}
                </div>
              ))}
            </> 

          )}
        </div>
      )}
    </div>
  );

 /* return (
    <div className='App'>
      find basic country information and weather <br></br>
      <input
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        placeholder="Search for a country ..."
      />
      <div className="results">
        {filteredCountries.length > 10 ? (
          <div>Too many matches, try again</div>
        ) : (
          <>
            {filteredCountries.map((country) => (
              <div key={country.name.common}>
                {country.name.common}{' '}
                <button onClick={() => handleShowCountryDetails(country)}>show</button>
              </div>
            ))}
          </>
        )}
      </div>
      {selectedCountry && (
        <div>
          <CountryInfo country={selectedCountry} />
          <WeatherApp selectedCountry={selectedCountry} />
        </div>
      )}
    </div>
  );*/
};

export default App;
