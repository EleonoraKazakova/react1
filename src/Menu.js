import React, { useState } from 'react';
import './Menu.css'

const countries = {
  Sweden: ['Stockholm', 'Gävle', 'Upsala'],
  USA: ['New York', 'Boston', 'Washington'],
  Russia: ['Moscow', 'Samara', 'Kazan'],

}

function Menu() {
  const [currentCountry, setCurrentCountry] = useState('')
  return (
    <div className='Menu'>
      {
        Object.entries(countries)
          .map(([country, cities]) => (
            <div
              className='Country'
              onMouseEnter={() => setCurrentCountry(country)}
              onMouseLeave={() => setCurrentCountry('')}
            >
              <div className={currentCountry === country ? 'selected_country' : ''}>
                {country}
              </div>
              <div className={currentCountry === country ? 'cities' : 'cities_hidden'}>
                {cities.map(city => <div className='city'>{city}</div>)}
              </div>
            </div>
          )
          )
      }
    </div>
  )
}


export default Menu


