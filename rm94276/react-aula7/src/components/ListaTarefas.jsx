import React from 'react';
import {DivLista} from '../style/styled'
import {useState} from "react"
import Tarefa from './Tarefa';
import FormTarefas from './FormTarefas';

function ListaTarefas() {
    
    const[tarefas,setTarefas] = useState([
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

const[nmTarefa, setNmTarefa] = useState({ 
    'titulo' : "",
    'setor' : "",
    'descicrao' : ""
})

//Criando uma função para dadicionar uma tarefa
const addTarefa = (e)=>{
    //Função que não deixa a página atualizar sem esse evento acontecer
    e.preventDefault()
    
    // const nmTarefa = {
    //     titulo : 'Planilha de Saláriosxxxx',
    //     setor : 'Dep.Pessoal',
    //     descricao : 'Gerar Planilha'
    // }

    setTarefas([...tarefas, nmTarefa])
}

    //Função de captura dos dados do Form

    const capturaDados =(e) =>{
        
        e.preventDefault()

        const {name, value} = e.target
        
        if(name == "titulo"){
            setNmTarefa({ 
                'titulo' : value,
                'setor' : nmTarefa.setor,
                'descicrao' : nmTarefa.descicrao
            })
        }
        if(name == "setor"){
            setNmTarefa({ 
                'titulo' : nmTarefa.titulo,
                'setor' : value,
                'descicrao' : nmTarefa.descicrao
            })
        }
        if(name == "descricrao"){
            setNmTarefa({ 
                'titulo' : nmTarefa.titulo,
                'setor' : nmTarefa.setor,
                'descicrao' : value
            })
        }
    }
    
    return(
    <DivLista>

        <FormTarefas
         digit={capturaDados}
        />

        {/* <button onClick={addTarefa}>Adicionar</button> */}

        {tarefas.map((tar, i)=>(
            <Tarefa
                key={i}
                tarefa= {tar}
            />
        ))}
        
    </DivLista>
  )
}

export default ListaTarefas;