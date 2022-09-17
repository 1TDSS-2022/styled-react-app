import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import FormTarefas from './FormTarefas'

export default function ListaTarefas() {

  const [tarefa,setTarefa] = useState([{

    titulo:'Lista de pagamento',
    setor:'Dep. vendas',
    descricao:'Levantar os valores das vendas',
},

{
    titulo:'Planilha de salários',
    setor:'Dep. Pessoal',
    descricao:'Gerar planilhas',

},
])  

 const [nTarefa, setNTarefa] = useState({
  
    "titulo":"",
    "setor":"",
    "descricao":""
  
  
  })

const addTarefa = (e)=>{
    //Função que não deixa a página atualizar no momento do evento
    e.preventDefault()
    // const nTarefa = {
    //     titulo:'Planilha de salários',
    //     setor:'Dep. Pessoal',
    //     descricao:'Gerar planilhas',
    // }
    
    setNTarefa({
      "titulo":"",
      "setor":"",
      "descricao":""
    })
    setTarefa([...tarefa, nTarefa])
}

const captura = (e)=>{
    e.preventDefault()

    //Desestruturação
    const {name, value} = e.target

    if(name === "titulo"){
      setNTarefa({
          "titulo":value,
          "setor":nTarefa.setor,
          "descricao":nTarefa.descricao
      })
    }

    if(name === "setor"){
      setNTarefa({
          "titulo":nTarefa.titulo,
          "setor":value,
          "descricao":nTarefa.descricao
      })
    }

    if(name === "descricao"){
      setNTarefa({
          "titulo":nTarefa.titulo,
          "setor":nTarefa.setor,
          "descricao":value
      })
    }
}

  return (
    <DivLista>

        <FormTarefas
          digit={captura}
        />

        {<button onClick={addTarefa}>Adicionar</button>}

        {tarefa.map((tar,i) => (
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
