import React, { useContext } from 'react'
import { RiAdminLine } from 'react-icons/ri'
import { LoginContext } from '../../contexts/LoginContext'

import './style.scss'
export default function HomeRh() {

  const { rh } = useContext(LoginContext)
  return (
    <main className='containerHomeRh'>
      <RiAdminLine size={100} color='var(--azul-200)'/>
      <h1>Minha Informações</h1>
       <section>
          <p><strong>Nome:</strong> {rh.nome} </p>
          <p><strong>Email:</strong> {rh.email}</p>
       </section>
    </main>
  )
}
