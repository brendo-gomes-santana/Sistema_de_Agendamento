import React, { useEffect, useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { Button } from '../../components/Button'
import { toast } from 'react-toastify'

import api from '../../service'

import './styles.scss'

export default function HomeSec() {

  const [agendamento, setAgendamento] = useState([])

  useEffect(()=> {
    (async ()=> {
      await api.get('/list/agendamento')
      .then((r)=> {

        setAgendamento(r.data)
      })
    })()
  },[])

  async function handleConluirAgendamento(id_agendamento){

    await api.put(`/concluir/agendamento?agendamento_id=${id_agendamento}`)
    .then(async ()=> {
      await api.get('/list/agendamento')
      .then((r)=> {

        setAgendamento(r.data)
        toast.success('Finalizado com sucesso!')
      })
      .catch((err)=> {
        console.log(err)
      })
    }).catch((err)=> {
      console.log(err)
    })
  }

  return (
    <main className='ContainerHomeSecretaria'>
      {agendamento.length === 0 && (
        <h3>Não possui nem agendamento</h3>
      )}
      {agendamento.map((agendamentos)=> {
        return(
          <div className='BoxDeAgendamento'>
          <div className='boxPaciente'>
            <div className='boxPiacenteInfor'>
            <p>Paciente: {agendamentos.user.nome}</p>
            <p>Valor: R$ {agendamentos.valor}</p>
            <p>data: {agendamentos.data_do_agendamento}</p>
            </div>
            <div className='boxDescricao'>
              <p>Descrição</p>
              <p>{agendamentos.descricao}</p>
            </div>
          </div>
          <div className='DentistaInfor'>
            <p>Dentista: {agendamentos.dentista.nome}</p>
            <p>Serviço: {agendamentos.servico.nome}</p>
            <Button onClick={ () => handleConluirAgendamento(agendamentos.id)} ><BsCheck2/> Conluir</Button>
          </div>
        </div>
        )
      })}
     
    </main>
  )
}
