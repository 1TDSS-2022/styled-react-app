import React from 'react'
import { DivForm } from './style/styled'


export default function FormTarefas(props) {

    return(
        <DivForm>
            <form method="post" onSubmit={props.addTarefa}>
                <div>
                    <input name='titulo' placeholder='Titulo' 
                    value={props.tarefa.titulo} onChange={props.digit} />
                </div>
                <div>
                    <input name='setor' placeholder='Setor' 
                    value={props.tarefa.setor} onChange={props.digit} />
                </div>
                <div>
                    <textarea name='descricao' placeholder='Descricao' 
                    value={props.tarefa.descricao} onChange={props.digit} />
                </div>
                <button type='submit'>Adicionar</button>
            </form>
        </DivForm>
    )
}