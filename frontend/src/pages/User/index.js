import React, { useState, useEffect, useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'
import { Button } from '../../components/Button'
import './style.scss'
import api from '../../service'
export default function HomeUser() {

  const { user } = useContext(LoginContext)
  const [buttonSelectionado, setButtonSelectionado] = useState(false)
  const [agendamento, setAgendamento] = useState([])

  useEffect(()=> {
    (async()=> {
    await api.get(`/list/agendamento/user?user_id=${user.id}&stts=${buttonSelectionado}`)
     .then((r)=> {
      setAgendamento(r.data)
     })
     .catch((err)=> {
      console.log(err.response.data.error)
     })
    })()
  },[buttonSelectionado, user])

  async function handleHistoricoAgendamento(){
    setButtonSelectionado(true)
  }
  async function handleAgendamento(){
    setButtonSelectionado(false)
  }
  return (
    <main className='ContainerUserHome'>
      <section className='NavContainerUser'>
        {buttonSelectionado ? 
        <Button onClick={ ()=> handleAgendamento()}>Histórico de agendamento</Button>
         :
         <Button onClick={ ()=> handleHistoricoAgendamento()}>Agendamento</Button>}
          
      </section>
      <section className='ContainerDeAgendamento'>
        {buttonSelectionado ? (
          <>
          {agendamento.length === 0 && (<p style={{textAlign: 'center'}}>Você não possui histórico de agendamento</p>)}
          {agendamento.map((agen) => {
            return(
            <div className='boxAgendamentoUser'>
              <p>Data do Agendamento: {agen.data_do_agendamento}</p>
              <p>Dentista: {agen.dentista.nome}</p>
              <p>Valor: R$ {agen.valor}</p>
              <p>Descição: {agen.descricao}</p>
          </div>
            )
          })}
          </>
        ) : (
          <>
          {agendamento.length === 0 && (<p style={{textAlign: 'center'}}>Você não possui agendamento</p>)}
          {agendamento.map((agen) => {
            return(
            <div className='boxAgendamentoUser'>
              <p>Data do Agendamento: {agen.data_do_agendamento}</p>
              <p>Dentista: {agen.dentista.nome}</p>
              <p>Valor: R$ {agen.valor}</p>
              <p>Descição: {agen.descricao}</p>
          </div>
            )
          })}
          </>
        )}
      </section>
      
    </main>
  )
}
