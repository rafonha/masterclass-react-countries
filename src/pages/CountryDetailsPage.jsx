import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { allCountries } from '../assets/data/countries'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Main from '../layout/Main'

export default function CountryDetailsPage() {
  let { countryId } =  useParams();
  let navigate = useNavigate();

  const country = allCountries.find(({id}) => id === countryId)

  return (
    <>
      <Header pageTitle={country.name} />
      <Main>
        <p><b>Capital: </b>{country.capital}</p>
        <p><b>Região: </b>{country.region}</p>
        <p><b>População: </b>{country.population}</p>
        <p><b>Área: </b>{country.area}</p>
        <button onClick={() => navigate("/")}>Voltar para a Home</button>
      </Main>
      <Footer />
    </>
  )
}