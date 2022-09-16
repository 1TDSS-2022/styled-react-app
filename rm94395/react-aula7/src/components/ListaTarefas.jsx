import React from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import { useState } from 'react'

export default function ListaTarefas() {

        const[tarefas, setTarefa] = useState([
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
                setor: "Dep. Bugs",
                descricao: "Levar os bug pro lado de lá"
            }
    ])

    const [nTarefa, setNTarefa] = useState(
        {
        "titulo": "",
        "setor": "",
        "descricao": ""
    }
    )

    const addTarefa = (e) => {
        e.preventDefault()
        // const novaTarefa = {
        //     titulo: "Planilia de Salarios",
        //     setor: "Dep. Pessoal",
        //     descricao: "Gerar Planilhas"
        // }
        setNTarefa({
            titulo: "Planilia de Salarios",
            setor: "Dep. Pessoal",
            descricao: "Gerar Planilhas"
            })
        setTarefa([...tarefas, nTarefa])
    }
/*"..." = spread */
    

    return (
        <DivLista>

            <button onClick={addTarefa}>Adicionar</button>
            {tarefas.map((tar, i) => (
                <Tarefa key={i}
                titulo={tar.titulo}
                setor={tar.setor}
                descricao={tar.descricao}
                />

            ))}
        </DivLista>
      )
    
 
}