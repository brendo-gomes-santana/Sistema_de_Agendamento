import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomeUser from '../../pages/User'
export default function RotasAuthUser() {
  return (
    <Routes>
        <Route path='/user' element={ <HomeUser/> } />
    </Routes>
  )
}
