import React, {useState} from 'react'
import './style.scss'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { toast } from 'react-toastify'

import api from '../../../service'

export default function Paciente() {

  const [nav, setNav] = useState(null)
  const [list, setList] = useState([])
  const [abrir, setAbrir] = useState('')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')
  const [endereco, setEndereco] = useState('')
  const [password, setPassword] = useState('')

  async function handleCadastrarNovoPaciente(e){
    e.preventDefault()

    if(!nome || !email || !contato || !endereco || !password){
      toast.error('Preenchar todos os campos')
    }

    await api.post('/create/user', {
      nome,
      email,
      contato,
      endereco,
      password
    })
    .then(() => {
      toast.success('Cadastrado com sucesso')
      setNome('')
      setEmail('')
      setContato('')
      setEndereco('')
      setPassword('')
    })
    .catch((err)=> {
      toast.error(err.response.data.error)
    })
  }

  async function handleListPaciente(){

    await api.get('list/user')
    .then((r)=> {
      setList(r.data)
      setNav('2')
    })
    .catch((err)=> {
      toast.error(err.response.data.error)
    })
    
  }
  return (
    <main>
      <section className='navBasePaciente'>
        <button onClick={() => setNav('1')}>Cadastrar paciente</button>
        <button onClick={handleListPaciente}>Listar pacientes</button>
      </section>

      <section className='baseDecadastrarList'>
        {nav === '1' && (
          <>
          <h1>Novo Paciente</h1>
            <form onSubmit={handleCadastrarNovoPaciente}>
              <label>
                Nome: <Input placeholder='Digite o  nome completo'
                value={nome} onChange={ v => setNome(v.target.value) }/>
              </label>
              <label>
                email: <Input type='email' placeholder='Digite o email'
                value={email} onChange={ v => setEmail(v.target.value)}/>
              </label>
              <label>
                contato: <Input placeholder='Digite o numero para contato' 
                value={contato} onChange={ v => setContato(v.target.value) }/>
              </label>
              <label>
                endereço: <Input placeholder='Digite o endereço'
                value={endereco} onChange={ v => setEndereco(v.target.value)}/>
              </label>
              <label>
                password: <Input type='password' placeholder='Digite a senha'
                value={password} onChange={ v => setPassword(v.target.value) }/>
              </label>
              <Button type='submit'>Cadastrar</Button>
            </form> 
          </>
        )}
        {nav === '2' && (
          <>
          {list.map((user)=> {
            return(
              <>
              {abrir !== user.id ? (
              <button className='baseInforPaciente' key={user.id} onClick={() => setAbrir(user.id)}>
                {user.nome}
              </button>
              ) : (
              <button className='baseInforPaciente' key={user.id} onClick={() => setAbrir(null)}>
                {user.nome}
              </button>
              )}
              {abrir === user.id && (
                <div className='containermaxInfor'>
                  <p><strong>Nome: </strong> {user.nome}</p>
                  <p><strong>Email: </strong> {user.email}</p>
                  <p><strong>Contato:</strong> {user.contato}</p>
                  <p><strong>Endereço:</strong> {user.endereco}</p>
                </div>
              )}
              </>
            )
          })}
          </>
        )}
      </section>
    </main>
  )
}
