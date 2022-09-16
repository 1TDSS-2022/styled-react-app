import React from 'react'

export default function FormTarefas() {
  return (
    <div>
        <form method="post">
            <div>
                <label>Título</label>
                <input type="text" name="titulo" />
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name="setor" />
            </div>
            <div>
                <label>Descrição</label>
                <textarea cols="30" rows="10" name="descricao"></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )
}
