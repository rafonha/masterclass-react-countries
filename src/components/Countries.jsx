import React from 'react'
import { ListLi, ListUl } from '../assets/styles/CountriesStyle'
import Country from './Country'

export default function Countries({
    countries='Países',
    title='Título',
    titleOfQuantity='Quantidade de países',
    quantityOfCountries=0,
    onCountryButtonClick = null,
    visitedCountries = []
}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{titleOfQuantity}: {quantityOfCountries}</p>
        <ListUl>
            {countries.map(countryData => {

              let isCountryVisited = visitedCountries.find(({id}) => id === countryData.id)

              return <ListLi key={countryData.id}>
                <Country
                  country={countryData}
                  isCountryVisited={isCountryVisited}
                  onCountryButtonClick={onCountryButtonClick}
                />
              </ListLi>
            })}
        </ListUl>
    </div>
  )
}
