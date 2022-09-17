import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'

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

    

    //CRIAR UMA FUNÇÃO PARA ADICIONAR UMA TAREFA 
    const  addTarefa = (e) =>{
        //Função que não deixa a pagina atualizar no momento do evento
        e.preventDefault()

        // const nTarefa = {
        //     titulo: 'Planilha de salários',
        //     setor: 'Dep. Pessoal',
        //     descricao: 'Gerar Planilhas',
        // }

        const [nTarefa, setNTarefa] =  ({
            "titulo": "",
            "setor" : "",
            "depaartamento" : ""
        })

        setTarefa([...tarefa, nTarefa])
    }

    //Função de captura de dados do formulario 

    const captura = (e)=>{
        e.preventDefault()

        //Desestruturação 
        const{name, value} = e.
        
        if(name === "titulo"){
            setNTarefa({
                "titulo": value,
                "setor": nTarefa.setor,
                "descricao": nTarefa.descricao
            })
            
        }
    }


  return (
    <DivLista>

        <FormTarefas
        digit = {captura}

        />

            <button onClick={addTarefa} >Adicionar</button>

        
        {tarefa.map((tar, i)=>(
            <Tarefa
                key={i}
                tarefa={tar}
                />
        ))}
    </DivLista>
  )
}

