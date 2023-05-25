import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom'

import LoginProvider from '../contexts/LoginContext'
import Header from '../components/Header'
import LoginRh from '../pages/LoginRh'
import LoginDentista from '../pages/LoginDentista'
import LoginSecretaria from '../pages/LoginSecretaria'
import LoginUsuario from '../pages/LoginUser'

import Home from '../pages/Home'

import RotasPrivadasRH from '../contexts/RotaPrivataRh'
import HomeRh from '../pages/Rh'
import CadastrarNovoRh from '../pages/Rh/CadastrarNovoRh/CadastrarNovoRh'

export default function RouterApp() {
  return (
    <Router>
      <LoginProvider>
        <Routes>
            <Route path='/' element={ <Home/> } />
            
            <Route path='/login/rh' element={ <LoginRh/> }/>
            <Route path='/login/secretaria' element={ <LoginSecretaria/> }/>
            <Route path='/login/dentista' element={ <LoginDentista/> }/>
            <Route path='/login/usuario' element={ <LoginUsuario/> }/>

            <Route path='/rh' element={ 
              <RotasPrivadasRH>
                <Header fecharLogin='@rhInfor'>
                  <Link to='/rh'>Home</Link>
                  <Link to='/rh/cadastra/rh'>Cadastrar Rh</Link>
                  <Link to='#'>Teste</Link>
                  <Link to='#'>Teste</Link>
                </Header> 
                <HomeRh/>  
              </RotasPrivadasRH> }/>

            <Route path='/rh/cadastra/rh' element={ 
              <RotasPrivadasRH> 
                <Header fecharLogin='@rhInfor'>
                  <Link to='/rh'>Home</Link>
                  <Link to='/rh/cadastra/rh'>Cadastrar Rh</Link>
                  <Link to='#'>Teste</Link>
                  <Link to='#'>Teste</Link>
                </Header> 
                <CadastrarNovoRh/> 
              </RotasPrivadasRH> }/>

        </Routes>
    </LoginProvider>
    </Router>
  )
}
