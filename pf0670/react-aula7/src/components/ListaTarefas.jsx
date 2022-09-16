import React from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import { useState } from 'react'

export default function ListaTarefa() {

    const [tarefa, setTarefa] = useState([{
        titulo: 'Lista de pagamento',
        setor: 'Dep. Vendas',
        descricao: 'Levantar os valores das vendas'
    },
    {
        titulo: 'Planilha de salários',
        setor: 'Dep. Pessoal',
        descricao: 'Gerar planilha',
    },
    {
        titulo: 'Lista de bugs',
        setor : 'Dep. TI',
        descricao: 'Apavorar os programadores'
    },
    ])
  return (
    <DivLista>
        {tarefa.map((tar, i)=>(
            <Tarefa
                key={i}
                titulo={tar.titulo}
                setor={tar.setor}
                descricao={tar.descricao}
                />
        ))}
    </DivLista>
  )
}
