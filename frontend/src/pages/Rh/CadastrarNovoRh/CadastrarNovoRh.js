import React, { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../../service/index'

import './style.scss'

import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

export default function CadastrarNovoRh() {
  
  const [qualForm, setQualForm] = useState(null)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')
  const [endereco, setEndereco] = useState('')
  const [password, setPassword] = useState('')
  const [codigo, setCodigo] = useState('')

  const [nomeSecretaria, setNomeSecretaria] = useState('')
  const [contatoSecretaria, setContatoSecretaria] = useState('')
  const [enderecoSecretaria, setEnderecoSecretaria] = useState('')
  const [passwordSecretaria, setPasswordSecretaria] = useState('')

  const [nomeDentista, setNomeDentista] = useState('')
  const [emailDentista, setEmailDentista] = useState('')
  const [contatoDentista, setContatoDentista] = useState('')
  const [data_de_nascimento, setData_de_nascimento] = useState('')
  const [enderecoDentista, setEnderecoDentista] = useState('')
  const [passwordDentista, setPasswordDentista] = useState('')

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
  async function handleCadastrarNovaSecretaria(e){
    e.preventDefault()
    if(!nomeSecretaria || !contatoSecretaria || !enderecoSecretaria || !passwordSecretaria){
      toast.error('Preenchar os campos')
      return;
    }

    api.post('create/secretaria', {
      nome: nomeSecretaria,
      contatoSecretaria: contatoSecretaria,
      endereco: enderecoSecretaria,
      password: passwordSecretaria
    })
    .then(()=> {
      toast.success('Secretária cadastrada com sucesso!')
      setNomeSecretaria('')
      setContatoSecretaria('')
      setEnderecoSecretaria('')
      passwordSecretaria('')
    })
    .catch((err)=> {
      toast.error(err.response.data.error)
    })
  }

  async function handleCadastrarNovoDentista(e){
    e.preventDefault()
    if(!nomeDentista || !emailDentista || !contatoDentista || !data_de_nascimento || 
      !enderecoDentista || !passwordDentista){
        toast.error('Preenchar todos os campos')
        return;
      }

      await api.post('/create/dentista',{
        nome: nomeDentista,
        email: emailDentista,
        contato: contatoDentista,
        data_de_nascimento,
        endereco: enderecoDentista,
        password: passwordDentista
      })
      .then(()=> {
        setNomeDentista('')
        setEmailDentista('')
        setContatoDentista('')
        setData_de_nascimento('')
        enderecoDentista('')
        setPasswordDentista('')
        toast.success('Dentista cadastra com sucesso!')
      })
      .catch((err)=> {
      toast.error(err.response.data.error)
      })
  }

  return (
    <main className='ContainerNovoCadastroRh'>
      <div>
        <Button onClick={() => setQualForm('1')}>Cadastro novo rh</Button>
        <Button onClick={() => setQualForm('2')}>Cadastro nova secretária</Button>
        <Button onClick={() => setQualForm('3')}>Cadastro novo dentista</Button>
      </div>

      { qualForm === '1' && (
          <>
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
          </>
      )}
     
     { qualForm === '2' && (
          <>
          <h1>Cadastrar Novo Funcionário da secretaria</h1>
          <form className='formNovoCadastroRh' onSubmit={handleCadastrarNovaSecretaria}>
            <label> 
              Nome: <Input placeholder='Digite o nome completo'
                    value={nomeSecretaria} onChange={ v => setNomeSecretaria(v.target.value) }/>
            </label>
            <label> 
              Contato: <Input placeholder='(xx) x xxxx - xxxx'
                      value={contatoSecretaria} onChange={ v => setContatoSecretaria(v.target.value) }/>
            </label>
            <label> 
              Endereço: <Input placeholder='rua: xxx, n°xx - bairro: xxxxx'
                        value={enderecoSecretaria} onChange={ v => setEnderecoSecretaria(v.target.value) }/>
            </label>
            <label> 
              password: <Input type='password' placeholder='Digite sua senha'
                        value={passwordSecretaria} onChange={ v => setPasswordSecretaria(v.target.value) }/>
            </label>
            <div>
              <Button type='submit'>Cadastrar</Button>
            </div>
          </form>
          </>
      )}

    { qualForm === '3' && (
          <>
          <h1>Cadastrar Novo Funcionário do Dentista</h1>
          <form className='formNovoCadastroRh' onSubmit={handleCadastrarNovoDentista}>
            <label> 
              Nome: <Input placeholder='Digite o nome completo'
                    value={nomeDentista} onChange={ v => setNomeDentista(v.target.value) }/>
            </label>
            <label> 
              Email: <Input type='email' placeholder='Digite o seu email'
                      value={emailDentista} onChange={ v => setEmailDentista(v.target.value) }/>
            </label>
            <label> 
              Contato: <Input placeholder='(xx) x xxxx - xxxx'
                      value={contatoDentista} onChange={ v => setContatoDentista(v.target.value) }/>
            </label>
            <label> 
              Endereço: <Input placeholder='rua: xxx, n°xx - bairro: xxxxx'
                        value={enderecoDentista} onChange={ v => setEnderecoDentista(v.target.value) }/>
            </label>
            <label> 
              password: <Input type='password' placeholder='Digite sua senha'
                        value={passwordDentista} onChange={ v => setPasswordDentista(v.target.value) }/>
            </label>
            <label> 
              Data de nascimento: <Input type='date'
                      value={data_de_nascimento} onChange={ v => setData_de_nascimento(v.target.value) }/>
            </label>
            <div>
              <Button type='submit'>Cadastrar</Button>
            </div>
          </form>
          </>
      )}
    </main>

  )
}
