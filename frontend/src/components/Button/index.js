import React from 'react'
import './style.scss'

export function Button({children, ...rest}){
    return(
        <button {...rest} className='buttonPersonalizado' >{children}</button>
    )
}

