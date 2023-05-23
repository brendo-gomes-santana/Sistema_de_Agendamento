import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginUser from '../pages/LoginUser'

export default function RouterApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <LoginUser/> }/>
        </Routes>
    </BrowserRouter>
  )
}
