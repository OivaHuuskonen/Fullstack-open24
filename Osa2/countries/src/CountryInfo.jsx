const CountryInfo = ({ country }) => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>capital: {country.capital}</div>
        <div>population: {country.population}</div>
        <div>Languages: </div>
        <ul className='lang'>
          {Object.keys(country.languages).map((key) => (
            <p key={key}>{country.languages[key]} </p>
          ))}
        </ul>
        <div className="image">
          {country.flags && country.flags.png && (
            <img src={country.flags.png} alt={country.name.common} className="country-flag" />
          )}
        </div>
      </div>
    );
  };

  export default CountryInfo;