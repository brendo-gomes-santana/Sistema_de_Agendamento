import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RoutasNotAuth from './RotasNaoAuth'
import RoutasAuthRh from './AuthRh'

import LoginProvider from '../contexts/LoginContext'

import Home from '../pages/Home'
export default function RouterApp() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>

      <LoginProvider>
        <RoutasNotAuth/> 
        <RoutasAuthRh/>
      </LoginProvider>
    </Router>
  )
}
