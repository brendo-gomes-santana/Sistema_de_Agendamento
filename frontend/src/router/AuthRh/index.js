import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomeRh from '../../pages/Rh'
import PrivataRh from '../../contexts/RotaPrivataRh'

export default function RotasAuthRH() {
  return (
    <PrivataRh>
      <Routes>
        <Route path='/rh' element={ <HomeRh/> } />
      </Routes>
    </PrivataRh>
  )
}
