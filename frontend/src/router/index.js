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
import ListdeTodoOsFuncionarios from '../pages/Rh/ListDeFunctionarios'
import Servico from '../pages/Rh/Servico'

import RotasPrivataSec from '../contexts/RotaPRivataSec'
import HomeSec from '../pages/Secretaria'
import Paciente from '../pages/Secretaria/Paciente'
import Agendamento from '../pages/Secretaria/Agendamento'

import RotaPrivataDentista from '../contexts/RotaPrivataDentista'
import HomeDentista from '../pages/Dentista'
import AgendamentoDentista from '../pages/Dentista/Agendamento'

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

            {/*Páginas de rh*/}
            <Route path='/rh' element={ 
              <RotasPrivadasRH>
                <Header fecharLogin='@rhInfor'>
                  <Link to='/rh'>Home</Link>
                  <Link to='/rh/cadastra'>Cadastrar</Link>
                  <Link to='/rh/funcionarios'>Funcionários</Link>
                  <Link to='/rh/servico'>Serviços</Link>
                </Header> 
                <HomeRh/>  
              </RotasPrivadasRH> }/>
            <Route path='/rh/cadastra' element={ 
              <RotasPrivadasRH> 
                <Header fecharLogin='@rhInfor'>
                  <Link to='/rh'>Home</Link>
                  <Link to='/rh/cadastra'>Cadastrar</Link>
                  <Link to='/rh/funcionarios'>Funcionários</Link>
                  <Link to='/rh/servico'>Serviços</Link>
                </Header> 
                <CadastrarNovoRh/> 
              </RotasPrivadasRH> }/>
              <Route path='/rh/funcionarios' element={ 
              <RotasPrivadasRH> 
                <Header fecharLogin='@rhInfor'>
                  <Link to='/rh'>Home</Link>
                  <Link to='/rh/cadastra'>Cadastrar</Link>
                  <Link to='/rh/funcionarios'>Funcionários</Link>
                  <Link to='/rh/servico'>Serviços</Link>
                </Header> 
                <ListdeTodoOsFuncionarios/> 
              </RotasPrivadasRH> }/>
              <Route path='/rh/servico' element={ 
              <RotasPrivadasRH> 
                <Header fecharLogin='@rhInfor'>
                  <Link to='/rh'>Home</Link>
                  <Link to='/rh/cadastra'>Cadastrar</Link>
                  <Link to='/rh/funcionarios'>Funcionários</Link>
                  <Link to='/rh/servico'>Serviços</Link>
                </Header> 
                <Servico/> 
              </RotasPrivadasRH> }/>
               
               { /*Rotas de Secretária*/ }
               <Route path='/secretaria' element={ 
                  <RotasPrivataSec>
                      <Header fecharLogin='@inforSec'>
                        <Link to='/secretaria'>Home</Link>
                        <Link to='/secretaria/paciente'>Paciente</Link>
                        <Link to='/secretaria/servico'>Serviços</Link>
                        <Link to='/secretaria/agendamento'>Agendamento</Link>
                      </Header>
                      <HomeSec/> 
                  </RotasPrivataSec>}/>
                  <Route path='/secretaria/paciente' element={ 
                  <RotasPrivataSec>
                      <Header fecharLogin='@inforSec'>
                        <Link to='/secretaria'>Home</Link>
                        <Link to='/secretaria/paciente'>Paciente</Link>
                        <Link to='/secretaria/servico'>Serviços</Link>
                        <Link to='/secretaria/agendamento'>Agendamento</Link>
                      </Header>
                      <Paciente/> 
                  </RotasPrivataSec>}/>
                  <Route path='/secretaria/servico' element={ 
                    <RotasPrivataSec> 
                      <Header fecharLogin='@inforSec'>
                          <Link to='/secretaria'>Home</Link>
                          <Link to='/secretaria/paciente'>Paciente</Link>
                          <Link to='/secretaria/servico'>Serviços</Link>
                          <Link to='/secretaria/agendamento'>Agendamento</Link>
                      </Header> 
                      <Servico/> 
                    </RotasPrivataSec> }/>
                    <Route path='/secretaria/agendamento' element={ 
                    <RotasPrivataSec> 
                      <Header fecharLogin='@inforSec'>
                          <Link to='/secretaria'>Home</Link>
                          <Link to='/secretaria/paciente'>Paciente</Link>
                          <Link to='/secretaria/servico'>Serviços</Link>
                          <Link to='/secretaria/agendamento'>Agendamento</Link>
                      </Header> 
                      <Agendamento/> 
                </RotasPrivataSec> }/>

              <Route path='/dentista' element={ 
              <RotaPrivataDentista>
                      <Header fecharLogin='@inforDentista'>
                          <Link to='/dentista'>Home</Link>
                          <Link to='/dentista/agendamento'>Agendamento</Link>
                      </Header>
                  <HomeDentista/>
              </RotaPrivataDentista>
               }/>
              <Route path='/dentista/agendamento' element={ 
              <RotaPrivataDentista>
                      <Header fecharLogin='@inforDentista'>
                          <Link to='/dentista'>Home</Link>
                          <Link to='/dentista/agendamento'>Agendamento</Link>
                      </Header>
                  <AgendamentoDentista/>
              </RotaPrivataDentista>
               }/>
        </Routes>
    </LoginProvider>
    </Router>
  )
}
