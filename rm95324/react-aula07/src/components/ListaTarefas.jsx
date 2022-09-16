import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'

export default function ListaTarefas() {

  const [tarefa, setTarefa] = useState([{
    titulo: 'Lista de Pagamento',
    setor: 'Dep. Vendas',
    descricao: 'Levantar os valores das vendas'
  },{
    titulo: 'Planilha de salários',
    setor: 'Dep. Pessoal',
    descricao: 'Gerar planilhas'
  }
])

  const [nTarefa, setNTarefa] = useState({
    "titulo":"",
    "setor":"",
    "descricao":""
  })

  const addTarefa = (e) =>{
    // Função que não deixa a página atualizar no momento do evento ♥
    e.preventDefault()
/*     const nTarefa = {
      titulo: 'Planilhas de Salários',
      setor: 'Dep. Pessoal',
      descricao: 'Levantar os valores das vendas'
    } */

    setNTarefa({
      "titulo":"",
      "setor":"",
      "descricao":""
    })

    setTarefa([...tarefa, nTarefa])
  }

  return (
    <DivLista>
      <button onClick={addTarefa}>Adicionar</button>
      {tarefa.map((tar,i)=>(
        <Tarefa
          key = {i}
          tarefa = {tar}
        />
      ))}
    </DivLista>
  )
}
