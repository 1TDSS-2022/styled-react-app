import React from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import { useState } from 'react'
import FormTarefas from './FormTarefas'

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
  }
  ])

  const [nTarefa,setNTarefa] = useState({
      "titulo":"",
      "setor":"",
      "descricao":""
  })


  const addTarefa = (e)=>{
      e.preventDefault()

      
      setNTarefa({
          "titulo":"",
          "setor":"",
          "descricao":""
      })
      setTarefa([...tarefa, nTarefa])
  }


  const captura = (e)=>{
      e.preventDefault()


      const {name, value} = e.target

      if(name === "titulo"){
          setNTarefa({
              "titulo":value,
              "setor":nTarefa.setor,
              "descricao":nTarefa.descricao
          })  
      }
  }

return (
  <DivLista>

      <FormTarefas
          digit={captura}
      />

      {tarefa.map((tar, i)=>(
          <Tarefa
              key={i}
              tarefa={tar}
              />
      ))}
  </DivLista>
  )
}