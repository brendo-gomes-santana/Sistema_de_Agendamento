import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../../../components/Button'
import api from '../../../service'

import './style.scss'
export default function ListDeFuncionarios() {

  const [arrayDoRh, setArrayDoRh] = useState([])
  const [arrayDoSec, setArratDoSec] = useState([])

  const [abrirDados, setAbrirDados] = useState(null)
  
  async function handleBuscarFunRh(){
    await api.get('list/rh', {
      params: {
        status: true
      }
    })
    .then((r)=> {
      setArrayDoRh(r.data)
    })
    .catch((err)=> {
      console.log(err)
    })
    setAbrirDados('1')
  }

  async function handleBuscarFunSec(){
    await api.get('list/secretaria', {
      params: {
        status: true
      }
    })
    .then((r)=> {
      setArratDoSec(r.data)
    })
    .catch((err)=> {
      console.log(err)
    })
    setAbrirDados('2')
  }

  async function handleBuscarFunDent(){
    setAbrirDados('3')
  }

  //demissão de funcionário
  async function handleDemitirRh(id_rh){
  
    await api.put('/demissao/rh', {
        id_rh: id_rh
    })
    .then(async()=> {
      await api.get('/list/rh' , {
        params: {
          status: true
        }
      })
      .then((r)=> {
        setArrayDoRh(r.data)
        toast.success('Funcionário não faz parte mais da equipe')
      })
    })
    .catch((err)=> {
      console.log(err.response.data.error)
    })
  }

  async function handleDemitirSec(id_sec){
    await api.put('/demissao/secretaria', {
        id_sec: id_sec
    })
    .then(async()=> {
      await api.get('/list/secretaria', {
        params: {
          status: true
        }
      })
      .then((r)=> {
        setArratDoSec(r.data)
        toast.success('Funcionário não faz parte mais da equipe')
      })
    })
    .catch((err)=> {
      console.log(err.response.data.error)
    })
  }
  return (
    <main className='ContainerListDeFuncionarios'>
        <div className='basedeMenu'>
          <Button onClick={handleBuscarFunRh}>funcionarios Do RH</Button>
          <Button onClick={handleBuscarFunSec}>funcionarios do Secretaria</Button>
          <Button onClick={handleBuscarFunDent}>funcionarios Do Dentistas</Button>
        </div>
        <div className='BaseDasInfor'>
          {abrirDados === '1' && (
            <>
            <h3 style={{textAlign: 'center', marginTop:'1rem'}}>Grade de funcionarios do RH</h3>
      
              {arrayDoRh?.map((item)=> {
                return(
                  <div key={item.id} className='ContainerBaseDeInformação'>
                    <div>
                      <p><strong>Nome:</strong> {item.nome}</p>
                      <p><strong>Email:</strong> {item.email}</p>
                      <p><strong>Contato: </strong> {item.contato}</p>
                    </div>
                    <Button onClick={() => handleDemitirRh(item.id)}>Demitir</Button>
                  </div>
                )
              })}
            </>
          )}

          {abrirDados === '2' && (
            <>
            <h3 style={{textAlign: 'center', marginTop:'1rem'}}>Grade de funcionarios da Secretária</h3>
      
              {arrayDoSec?.map((item)=> {
                return(
                  <div key={item.id} className='ContainerBaseDeInformação'>
                    <div>
                      <p><strong>Nome:</strong> {item.nome}</p>
                      <p><strong>Contato: </strong> {item.contato}</p>
                      <p><strong>endereço:</strong> {item.endereco}</p>
                    </div>
                    <Button onClick={() => handleDemitirSec(item.id)}>Demitir</Button>
                  </div>
                )
              })}
            </>
          )}
          {abrirDados === '3' && (
          <p>Dentista</p>
          )}
        </div>
    </main>
  )
}
