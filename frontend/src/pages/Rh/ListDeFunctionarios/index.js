import React, { useState } from 'react'

import { Button } from '../../../components/Button'

import './style.scss'
export default function ListDeFuncionarios() {

  const [abrirDados, setAbrirDados] = useState(null)
  
  async function handleBuscarFunRh(e){
    e.preventDefault()
    setAbrirDados('1')
  }

  async function handleBuscarFunSec(e){
    e.preventDefault()
    setAbrirDados('2')
  }

  async function handleBuscarFunDent(e){
    e.preventDefault()
    setAbrirDados('3')
  }
  return (
    <main className='ContainerListDeFuncionarios'>
        <div className='basedeMenu'>
          <Button onClick={handleBuscarFunRh}>funcionarios Do RH</Button>
          <Button onClick={handleBuscarFunSec}>funcionarios do Secretaria</Button>
          <Button onClick={handleBuscarFunDent}>funcionarios Do Dentistas</Button>
        </div>

        {abrirDados === '1' && (
          <p>Rh</p>
        )}
        {abrirDados === '2' && (
          <p>Secretaria</p>
        )}
        {abrirDados === '3' && (
          <p>Dentista</p>
        )}
    </main>
  )
}
