import React, { useState } from 'react'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { toast } from 'react-toastify'
import api from '../../../service'

import './style.scss'
export default function Servico() {

  const [navSelectionado, setNavSelectionado] = useState(null)
  const [servico, setServico] = useState('')
  const [listServico, setListServico] = useState([])

  async function handleNovoServico(e){
    e.preventDefault()
    if(!servico){
      toast.error('Preenchar o nome do serviço')
      return;
    }

    await api.post('create/servico', {
      nome: servico
    })
    .then(()=> {
      toast.success('Serviço Criado com sucesso')
      setServico('')
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  async function handleListServico(){

    await api.get('/list/servico')
    .then((r)=> {
      setListServico(r.data)
    })

    setNavSelectionado('2')
  }

  async function handleRemoveServico(id_servico){
    await api.delete('/remove/servico', {
      params: {
        id_servico: id_servico
      }
    })
    .then(async()=> {
      await api.get('/list/servico')
      .then((r)=> {
        toast.success('Serviço Removido com sucesso')
        setListServico(r.data)
      })
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  return (
    <main className='ContainerServico'>
      <section className='navServico'>
        <button onClick={ () => setNavSelectionado('1') } >Cadastrar Novo Serviço</button>
        <button onClick={handleListServico} >Lista Serviços</button>
      </section>
      <section className='BaseServico'>
        {navSelectionado === '1' && (
          <>
          <h2>Novo Serviço</h2>
          <form onSubmit={handleNovoServico}>
            <label>
              <strong>Nome do serviço: </strong>
            </label>
            <Input placeholder='Digite aqui o nome do serviço'
            value={servico} onChange={ v => setServico(v.target.value) }/>
            <Button type='submit'>Cadastrar</Button>
          </form>
          </>

        )}
        {navSelectionado === '2' && (
          <>
              {listServico.length === 0 && (
                <p>Não possui nem um serviço cadastrado no momento...</p>
              )}
            <div className='baseDeListServico' >
          {listServico?.map((serv) => {
            return(
                <div className='caixaDeServico' key={serv.id}>
                  <p>{serv.nome}</p>
                  <button onClick={ () => handleRemoveServico(serv.id)}>Remove</button>
                </div>
            )
          })}
          </div>
          </>

        )}
      </section>
    </main>
  )
}
