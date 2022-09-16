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
    }
    ])

    const [nTarefa,setNTarefa] = useState({
        "titulo":"",
        "setor":"",
        "descricao":""
    })

    //CRIAR UMA FUNÇÃO PARA ADICIONAR UMA TAREFA
    const addTarefa = (e)=>{
        //Função que não deixa a página atualizar no momento do evento
        e.preventDefault()
        
        // const nTarefa = {
        //     titulo: 'Planilha de SaláriosXXX',
        //     setor : 'Dep. Pessoal',
        //     descricao: 'Gerar Planilhas'
        // }
        
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

        {tarefa.map((tar, i)=>(
            <Tarefa
                key={i}
                tarefa={tar}
                />
        ))}
    </DivLista>
  )
}
