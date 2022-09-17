import React from 'react';

export default function FormTarefas(props){
    return(
        <div>
            <form action="">
                <div>
                    <label>Titulo</label>
                    <input type="text" name='titulo' onChange={props.digit}/>
                </div>
                <div>
                    <label>Setor</label>
                    <input type="text" name='setor' onChange={props.digit}/>
                </div>
                <div>
                    <label>Descricao</label>
                    <textarea name='descricao' cols="30" rows="10" onChange={props.digit}></textarea>
                </div>
                <div>
                    <button type='submit'>Adicionar</button>
                </div>
            </form>
        </div>
    )
}