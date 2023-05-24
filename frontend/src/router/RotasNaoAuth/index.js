import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginUser from '../../pages/LoginUser'
import LoginDentista from '../../pages/LoginDentista'
import LoginSecretaria from '../../pages/LoginSecretaria'
import LoginRh from '../../pages/LoginRh'

export default function RotasNotAuth() {
  return (
      <Routes>
        <Route path='/login/usuario' element={ <LoginUser/> }/>
        <Route path='/login/secretaria' element={ <LoginSecretaria/> } />
        <Route path='/login/dentista' element={ <LoginDentista/> } />
        <Route path='/login/rh' element={ <LoginRh/> } />
      </Routes>

  )
}
