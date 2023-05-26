import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'

import './styles.scss'

export default function HomeSec() {
  const { secretaria } = useContext(LoginContext)

  return (
    <main className='ContainerHomeSecretaria'>
      <h1>{secretaria.nome}</h1>
    </main>
  )
}
