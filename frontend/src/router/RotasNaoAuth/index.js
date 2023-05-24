import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'

import LoginUser from '../../pages/LoginUser'
import LoginDentista from '../../pages/LoginDentista'
import LoginSecretaria from '../../pages/LoginSecretaria'
import LoginRh from '../../pages/LoginRh'

import LoginProvider from '../../contexts/LoginContext'

export default function RotasNotAuth() {
  return (
    <LoginProvider>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/login/usuario' element={ <LoginUser/> }/>
        <Route path='/login/secretaria' element={ <LoginSecretaria/> } />
        <Route path='/login/dentista' element={ <LoginDentista/> } />
        <Route path='/login/rh' element={ <LoginRh/> } />
      </Routes>
      </LoginProvider>
  )
}
