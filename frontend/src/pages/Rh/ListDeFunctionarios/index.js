import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../../../components/Button'
import api from '../../../service'

import './style.scss'

import Loading from '../../../components/Loading'

export default function ListDeFuncionarios() {

  const [arrayDoRh, setArrayDoRh] = useState([])
  const [arrayDoSec, setArratDoSec] = useState([])
  const [arrayDent, setArrayDent] = useState([])

  const [abrirDados, setAbrirDados] = useState(null)
  const [loading, setloading] = useState(false)

  //pegar informações
  async function handleBuscarFunRh(){
    setAbrirDados(null)
    setloading(true)
    await api.get('list/rh', {
      params: {
        status: true
      }
    })
    .then((r)=> {
      setArrayDoRh(r.data)
      setloading(false)
    })
    .catch((err)=> {
      console.log(err)
      setloading(false)
    })
    setAbrirDados('1')
  }

  async function handleBuscarFunSec(){
    setAbrirDados(null)
    setloading(true)
    await api.get('list/secretaria', {
      params: {
        status: true
      }
    })
    .then((r)=> {
      setArratDoSec(r.data)
      setloading(false)
    })
    .catch((err)=> {
      console.log(err)
      setloading(false)
    })
    setAbrirDados('2')
  }

  async function handleBuscarFunDent(){
    setAbrirDados(null)
    setloading(true)
    await api.get('list/dentista')
    .then((r)=> {
      setArrayDent(r.data)
      setloading(false)
    })
    .catch((err)=> {
      console.log(err)
      setloading(false)
    })
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
  async function handleDemitirDent(id_dent){
    await api.put('/demissao/dentista', {
        id_dent: id_dent
    })
    .then(async()=> {
      await api.get('/list/dentista')
      .then((r)=> {
        setArrayDent(r.data)
        toast.success('Funcionário não faz parte mais da equipe')
      })
    })
    .catch((err)=> {
      toast.error(err.response.data.error)
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
          {loading && (
            <>
              <br/>
              <br/>
              <Loading/>
            </>
            
          )}
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
            <>
            <h3 style={{textAlign: 'center', marginTop:'1rem'}}>Grade de funcionarios Dentistas</h3>
      
              {arrayDent?.map((item)=> {
                return(
                  <div key={item.id} className='ContainerBaseDeInformação'>
                    <div>
                      <p><strong>Nome:</strong> {item.nome}</p>
                      <p><strong>data de nascimento: </strong> {item.data_de_nascimento}</p>
                      <p><strong>email:</strong> {item.email}</p>
                      <p><strong>contato:</strong> {item.contato}</p>
                    </div>
                    <Button onClick={() => handleDemitirDent(item.id)}>Demitir</Button>
                  </div>
                )
              })}
            </>
          )}
        </div>
    </main>
  )
}
