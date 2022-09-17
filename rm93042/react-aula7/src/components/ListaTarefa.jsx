import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import FormTarefa from './FormTarefa'


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

  const [ntarefa,setNTarefa]=useState({
    "titulo":"",
    "setor":"",
    "descricao":""
  })

  const addTarefa=(e)=>{

    e.preventDefault()
    const novaTarefa ={
      // titulo:'Verificar Bugs',
      // setor:'Dep IT',
      // descricao:'problemas matera Core',
    }
    setNTarefa({
      "titulo":"",
      "setor":"",
      "descricao":""
    })
 
    setTarefa([...tarefa,ntarefa])
  }

  const captura = (e)=>{
    e.preventDefault()
    const {name,value}=e.target
  }


  return (
    <DivLista>
    
       <FormTarefa
       digit={captura}
       />
       {/* <button onClick={addTarefa}>Adicionar</button>    */} 
       <p>ListaTarefa</p> 
       {tarefa.map((tar,i)=>(
        <Tarefa
        key={i}
        tarefa={tar}
        />
       ))}
       
    </DivLista>
  )
}





