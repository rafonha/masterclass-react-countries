import React from 'react'
import { HeaderCnt, HeaderImg } from '../assets/styles/HeaderStyle'
import mapaMundi from '../assets/images/mapa-mundi.jpg'

export default function Header({ pageTitle='Nome da página' }) {
  return (
    <HeaderCnt>
      <h1>{pageTitle}</h1>
      <HeaderImg src={mapaMundi} alt="" />
    </HeaderCnt>
  )
}