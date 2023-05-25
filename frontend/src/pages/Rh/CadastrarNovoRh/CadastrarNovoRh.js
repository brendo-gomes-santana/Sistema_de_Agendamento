import React, { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../../service/index'

import './style.scss'

import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

export default function CadastrarNovoRh() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')
  const [endereco, setEndereco] = useState('')
  const [password, setPassword] = useState('')
  const [codigo, setCodigo] = useState('')

  async function handleCadastrarNovoRh(e){
    e.preventDefault()
    
    if(!nome || !email || !contato || !endereco || !password || !codigo){
      toast.error('Preenchar todas as informações')
      return;
    }
    
    await api.post('create/rh',{
      nome,
      email,
      contato,
      endereco,
      password,
      codigo
    })
    .then(()=> {

      toast.success('Rh cadastrado com sucesso')

      setNome('')
      setEmail('')
      setContato('')
      setEndereco('')
      setPassword('')
      setCodigo('')

    })
    .catch((erro)=>{
      toast.error(erro.response.data.error)
    })
    
  }


  return (
    <main className='ContainerNovoCadastroRh'>
      <h1>Cadastrar Novo Funcionário do Rh</h1>
    
      <form className='formNovoCadastroRh' onSubmit={handleCadastrarNovoRh}>
        <label> 
          Nome: <Input placeholder='Digite o nome completo'
                value={nome} onChange={ v => setNome(v.target.value) }/>
        </label>
        <label> 
          Email: <Input type='email' placeholder='Digite o seu email'
                  value={email} onChange={ v => setEmail(v.target.value) }/>
        </label>
        <label> 
          Contato: <Input placeholder='(xx) x xxxx - xxxx'
                   value={contato} onChange={ v => setContato(v.target.value) }/>
        </label>
        <label> 
          Endereço: <Input placeholder='rua: xxx, n°xx - bairro: xxxxx'
                     value={endereco} onChange={ v => setEndereco(v.target.value) }/>
        </label>
        <label> 
          password: <Input type='password' placeholder='Digite sua senha'
                    value={password} onChange={ v => setPassword(v.target.value) }/>
        </label>
        <label> 
          codigo: <Input type='password' placeholder='código no Rh chefe'
                  value={codigo} onChange={ v => setCodigo(v.target.value) }/>
        </label>
        <div>
          <Button type='submit'>Cadastrar</Button>
        </div>

      </form>
    </main>

  )
}
