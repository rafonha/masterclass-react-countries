import React, { useState } from 'react'
import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'
import { allCountries } from '../assets/data/countries'

export default function Home() {
    const [name, setname] = useState('Rafaela')

    function changeName(event) {
        let newName = event.target.value;
        setname(newName)
    }

  return (
    <>
        <Header pageTitle='Home' />
        <Main>
            <label htmlFor="inputName">Digite o seu nome: </label>
            <input type="text" name="inputName" id="inputName" onChange={changeName} />
            <p>Olá, meu nome é {name}!</p>

            <h2>Países</h2>
            <ul>
                {allCountries.map(country => (
                    <li key={country.id}>{country.name}</li>
                ))}
            </ul>
        </Main>
        <Footer />
    </>
  )
}