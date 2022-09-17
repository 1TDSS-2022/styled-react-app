import React from 'react'

export default function FormTarefas(props) {
  return (
    <div>
        <form method="post">
            <div>
                <label>Título</label>
                <input type="text" name="titulo" onChange={props.digit}/>
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name="setor" onChange={props.digit} />
            </div>
            <div>
                <label>Descrição</label>
                <textarea cols="30" rows="" name="descricao" onChange={props.digit}></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )
}
