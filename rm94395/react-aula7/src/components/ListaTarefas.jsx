import React from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import { useState } from 'react'

export default function ListaTarefas() {

        const[tarefa, setTarefa] = useState([
            {
                titulo: "Lista de Pagamento",
                setor: "Dep. Vendas",
                descricao: "Levar os pagamentos pro lado de lá"
            },
            {
                titulo: "Lista de Gente",
                setor: "Dep. Gente",
                descricao: "Levar os gente pro lado de lá"
            }
    ])
    return (
        <DivLista>
            {tarefa.map((tar, i) => (
                <Tarefa key={i}
                titulo={tar.titulo}
                setor={tar.setor}
                descricao={tar.descricao}
                />

            ))}
        </DivLista>
      )
    
 
}