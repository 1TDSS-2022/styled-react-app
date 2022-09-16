import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'


export default function ListaTarefa() {

  const [tarefa,setTarefa]=useState([
    {
      titulo:'Lista de pagamento',
      setor:'Dep Vendas',
      descricao:'Levantar os valores das vendas',

    },

    {
      titulo:'Lista de Salários',
      setor:'Dep pessoal',
      descricao:'Gerar planilhas',
    }
    
  ])

  return (
    <DivLista>
       <p>ListaTarefa</p> 
      
       {tarefa.map((tar,i)=>(
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





