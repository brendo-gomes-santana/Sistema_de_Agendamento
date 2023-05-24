import React, { useState } from 'react'
import { BiUser, BiLoaderCircle } from 'react-icons/bi'

import './style.scss'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { toast } from 'react-toastify'

export default function LoginUser() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function handleLoginUser(e){
        e.preventDefault()

        if(!email || !password){
            toast.error('Preenchar Todas as informações')
            return;
        }

    }
    return (
        <main className='containerLoginUser'>
            <h1><BiUser/> Login</h1>
            <form className='formUserLogin' onSubmit={handleLoginUser}>
                <label>
                    Email:  <Input type='text' placeholder='Digite seu email' 
                                value={email} onChange={ v => setEmail(v.target.value)}/>
                </label>
                <label>
                    Senha: <Input type='password' placeholder='Digite sua senha' 
                                value={password} onChange={ v => setPassword(v.target.value)}/>
                </label>
                <Button type='submit'>{false? <BiLoaderCircle className='loader'/> : <span>Entrar</span>}</Button>
            </form>
        </main>
    )
    }

