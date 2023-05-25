import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LoginProvider from '../contexts/LoginContext'

import LoginRh from '../pages/LoginRh'
import LoginDentista from '../pages/LoginDentista'
import LoginSecretaria from '../pages/LoginSecretaria'
import LoginUsuario from '../pages/LoginUser'

import Home from '../pages/Home'

import RotasPrivadasRH from '../contexts/RotaPrivataRh'
import HomeRh from '../pages/Rh'

export default function RouterApp() {
  return (
    <Router>
      <LoginProvider>
        <Routes>
            <Route path='/' element={ <Home/> } />
            
            <Route path='/login/rh' element={ <LoginRh/> }/>
            <Route path='/login/secreataria' element={ <LoginDentista/> }/>
            <Route path='/login/dentista' element={ <LoginSecretaria/> }/>
            <Route path='/login/usuario' element={ <LoginUsuario/> }/>

            <Route path='/rh' element={ <RotasPrivadasRH> <HomeRh/>  </RotasPrivadasRH> } />
        </Routes>
    </LoginProvider>
    </Router>
  )
}
