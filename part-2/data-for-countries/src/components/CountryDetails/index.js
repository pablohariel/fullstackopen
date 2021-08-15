import { useEffect, useState } from "react"
import axios from 'axios'

const CountryDetails = ({ country }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    console.log(api_key)
    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name}`).then(response => {
      country.weather = response.data
      console.log(country)
      setLoading(false)
    })
  }, [country])

  return (
    <>
      {loading ? 
        <p>Loading...</p> 
        : 
        <div>
          <h2>{country.name}</h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>

          <h3>Spoken languages</h3>
          <ul>
            {country.languages.map(language => <li key={language}>{language.name}</li>)}
          </ul>
          <img src={country.flag} alt={`${country.name}-flag`} />

          <h3>Weather in {country.name}</h3>
          <p><strong>temperature:</strong> {country.weather.current.temperature}</p>
          <img src={country.weather.current.weather_icons[0]} alt={`${country.name}-weather-icon`} />
          <p><strong>wind:</strong> {country.weather.current.wind_speed} mph direction {country.weather.current.wind_dir}</p>
        </div>
      }
    </>
  )
}

export { CountryDetails }