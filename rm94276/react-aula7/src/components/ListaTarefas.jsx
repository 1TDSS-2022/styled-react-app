import React from 'react';
import {DivLista} from '../style/styled'
import {useState} from "react"
import Tarefa from './Tarefa';

function ListaTarefas() {
    
    const[tarefas,seTarefas] = useState([
        {
            titulo : 'Lista de Pagamento',
            setor : 'Dep.Vendas',
            descricao : 'Levantar os valores das vendas',
        },
        {   
            titulo : 'Planilha de salários',
            setor : 'Dep. Pessoal',
            descricao : 'Gerar Planilhas',
        }
]);

    return (
    <DivLista>
        {tarefas.map((tar, i)=>(
            <Tarefa
                key={i}
                titulo = {tar.titulo}
                setor = {tar.setor}
                descricao = {tar.descricao}
            />
        ))}
        
    </DivLista>
  )
}

export default ListaTarefas;