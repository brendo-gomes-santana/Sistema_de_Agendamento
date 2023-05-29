import { useState, useEffect, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import api from "../../service"

import { toast } from "react-toastify"

import './style.scss'

export default function HomeDentista() {

    const { dentista } = useContext(LoginContext)
    const [dados, setDados] = useState([])

    useEffect(() => {
        (async()=> {
            await api.get('/list/agendamento/dentista', {
                params: {
                    dentista_id: dentista?.id
                }
            })
            .then((r)=> {
                setDados(r.data)
            })
            .catch((err)=> {
                console.log(err)
            })
        })()
    }, [dentista]) 
    async function handleConluirAgendamento(id_agendamento){
        await api.put(`/concluir/agendamento?agendamento_id=${id_agendamento}`)
        .then(async()=> {
            const r = await api.get('/list/agendamento/dentista', {
                params: {
                    dentista_id: dentista?.id
                }
            })
            setDados(r.data)
            toast.success('Concluido com sucesso')
        })
        .catch((err)=> {
            console.log(err)
        })
    }
  return (
    <main className="ContainerHomeDentista">
        {dados.length === 0 && (
            <p>Você não possui nem um agendamento</p>
        )}
        {dados.map((agendamento) => {
            return(
            <div className="boxAgendamentoDentista" key={agendamento.id}>
                <p>data da agendamento: {agendamento.data_do_agendamento}</p>
                <p>Paciente: {agendamento.user.nome}</p>
                <p>Serviço: {agendamento.servico.nome}</p>
                <p>descrição: {agendamento.descricao}</p>
                <p>Valor: R$ {agendamento.valor}</p>
                <button onClick={ ()=> handleConluirAgendamento(agendamento.id)}>concluido</button>
            </div>
            )
        })}
        
    </main>
  )
}
