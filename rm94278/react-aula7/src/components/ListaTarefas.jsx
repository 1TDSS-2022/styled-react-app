import React from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import { useState } from 'react'
import FormTarefas from './FormTarefas'

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
        },
        {
            titulo: "Lista de bugs",
            steor: "Dep. TI",
            descricao: "Aprovar os programadores"
        }
    ])

    const [nTarefa, setNTarefa] = useState({
        "titulo":"",
        "setor":"",
        "descricao":""
    })

    //criar funcao para adicionar tarefa
    const addTarefa = (e)=>{
        e.preventDefault()
        // const nTarefa = {
        //     titulo: "Planinha de Salario",
        //     steor: "Dep. Pessoal",
        //     descricao: "Gerar planilhas"  
        // }

        setNTarefa({
            "titulo":"",
            "setor":"",
            "descricao":""
        })
        setTarefa([...tarefa, nTarefa])
    }

    //FUNCAO DE CAPTURA DE DADOS DO FORMULARIO

    const captura = (e)=> {
        e.preventDefault()
        

        //DESESTRUTURACAO
        const {name, value} = e.target

        if(name == "titulo"){
            setNTarefa({
                "titulo":value,
                "setor":nTarefa.setor,
                "descricao":nTarefa.descricao
            })
        }
        else if(name == "setor"){
            setNTarefa({
                "titulo":nTarefa.titulo,
                "setor":value,
                "descricao":nTarefa.descricao
            })
        }
        else if(name == "descricao"){
            setNTarefa({
                "titulo":nTarefa.descricao,
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

            {/* <button onClick={addTarefa}>Adicionar</button> */}

            {tarefa.map((tar, i) => (
                <Tarefa
                key={i}
                tarefa={tar}
                />

            ))}
        </DivLista>
    )
    
 
}