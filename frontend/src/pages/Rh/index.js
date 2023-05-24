import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'
export default function HomeRh() {
  const { logoutRH } = useContext(LoginContext)

  return (
    <div>
        <h1>Rota do Rh privata</h1>
        <button onClick={()=> logoutRH()}>Sair</button>
    </div>
  )
}
