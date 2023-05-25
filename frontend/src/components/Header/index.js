import React, { useContext } from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri';

import { LoginContext } from '../../contexts/LoginContext';
import './style.scss'
export default function Header({children, fecharLogin}) {
    const { logout } = useContext(LoginContext)


  return (
    <header className='containerHeader'>
        <button
        className='buttonLogout'
        onClick={() => logout(fecharLogin)} 
        > <RiLogoutBoxLine/> </button>

        <div className='baseImgTitleHeader'>
            <img  src={require('../../imgs/logo.png')} alt='logo_da_clinica'/>
            <h1>Clinica on</h1>
        </div>

        <nav className='baseNav'>
                {children}
        </nav>
    </header>
  )
}
