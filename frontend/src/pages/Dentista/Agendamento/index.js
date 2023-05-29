import React, { useState, useEffect, useContext } from 'react'
import api from '../../../service'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

import './style.scss'
import { toast } from 'react-toastify'

import { LoginContext } from '../../../contexts/LoginContext'

export default function AgendamentoDentista() {

    const { dentista } = useContext(LoginContext)

    const [usuario, setUsuario] = useState([])
    const [servico, setServico] = useState([])

    const [valorusuario, setValorUsuario] = useState('')
    const [valorservico, setValorServio] = useState('')
    const [valor, setValor] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDecricao] = useState('')

    useEffect(() => {
        ( async ()=> {
            const usuario = await api.get('list/user')
            const servico = await api.get('list/servico')

            setUsuario(usuario.data)
            setServico(servico.data)
        })()
    },[])

    async function handleAgendamento(e){
        e.preventDefault()
        
        if(!valorusuario || !valorservico ||
            !valor || !data || !descricao){
                toast.error('Preenchar todos os campos')
                return;
            }
        await api.post('/create/agendamento',{
            dentista_id: dentista?.id,
            user_id: valorusuario,
            servico_id: valorservico,
            data_do_agendamento: data,
            valor,
            descricao,
        })
        .then(()=> {
            toast.success('Agendado com sucesso')
            setValorUsuario('')
            setValorServio('')
            setData('')
            setValor('')
            setDecricao('')
        })
        .catch((err)=> {
            console.log(err)
        })
    }

  return (
    <main className='ContainerFormAgendamento'>
        <h1 style={{
            color: 'var(--azul-500)',
            marginBottom: '1rem',
            fontWeight: 'bold',
        }}>Agendamento</h1>
        <form onSubmit={handleAgendamento} className='formAgendamento'>
            <select value={valorservico} onChange={ v => setValorServio(v.target.value)}>
                <option>Selecione o Serviço</option>
                {servico?.map((servicos)=> {
                    return(
                        <option key={servicos.id} value={servicos.id}>{servicos.nome}</option>
                    )
                })}
            </select>
            <select value={valorusuario} onChange={ (v) => setValorUsuario(v.target.value)}>
                <option>Selecione o usuário</option>
                {usuario?.map((usuario)=> {
                    return(
                        <option key={usuario.id} value={usuario.id}>{usuario.nome}</option>
                    )
                })}
            </select>
            <Input type='date' value={data} onChange={ v => setData(v.target.value)}/>
            <Input type='text' placeholder='Digite o valor' value={valor} onChange={ v => setValor(v.target.value)}/>
            <textarea value={descricao} onChange={ v => setDecricao( v.target.value )} placeholder='descrição'/>

            <Button type='submit'>Agendar</Button>
        </form>
    </main>
  )
}
