import { useState, useEffect } from 'react'
import axios from 'axios'

import { CountryDetails } from './components/CountryDetails'

import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
      setLoading(false)
    })
  }, [])

  const countriesToShow = searchValue ? countries.filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase())) : []

  return (
    <div className="App">
      {loading ? 
        <p>Loading...</p>
        :
        <>
          <input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />

          {countriesToShow.length > 1 && countriesToShow.length < 11 && 
            countriesToShow.map(country => {
              return <div key={country.name}>
                <p>{country.name}</p>
                <button onClick={() => setSearchValue(country.name)}>show</button>
              </div>
            })
          }
          
          {countriesToShow.length > 10 && 
            <p>Too many matches, specify another filter</p>
          }
          
          {countriesToShow.length === 1 && 
            <CountryDetails country={{...countriesToShow[0]}} />
          }

          {searchValue && countriesToShow.length < 1 && 
            <p>No matches found, specify another filter</p>
        }
        </>
      }
    </div>
  );
}

export default App;
