import React from 'react'
import { DivTarefa } from '../style/styled'

const Tarefa = props=>{
    return(
        <DivTarefa>
            <h2>{props.tarefa.titulo}</h2>
            <p>Para: {props.tarefa.setor}</p>
            <p>{props.tarefa.descricao}</p>
        </DivTarefa>
        )
    }

    export default Tarefa;
