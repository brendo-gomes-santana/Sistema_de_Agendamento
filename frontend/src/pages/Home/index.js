import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default function Home() {
  return (
    <main className='containerHome'>
      <h1>Faça login </h1>
        <section>
          <Link to='/login/rh'>Login RH</Link>
          <Link to='/login/dentista'>Login Dentista</Link>
          <Link to='/login/secretaria'>Login Secretária</Link>
          <Link to='/login/usuario'>Login Usuário</Link>
        </section>
    </main>
  )
}
