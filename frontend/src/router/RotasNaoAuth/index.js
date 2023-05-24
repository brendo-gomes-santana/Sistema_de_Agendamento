import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginUser from '../../pages/LoginUser'

export default function RotasNotAuth() {
  return (
    <Routes>
        <Route path='/' element={ <LoginUser/> }/>
    </Routes>
  )
}
