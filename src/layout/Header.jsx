import React from 'react'

export default function Header({ pageTitle='Nome da página' }) {
  return (
    <header>
      <h1>{pageTitle}</h1>
    </header>
  )
}