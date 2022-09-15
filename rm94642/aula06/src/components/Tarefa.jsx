import React from 'react'
import { DivTarefa } from './style/styled'
import {FaTrashAlt as X } from 'react-icons/fa';

export default function Tarefa(props) {
  return (
    <DivTarefa>
      <h2>{props.titulo}</h2>
      <p>Para: {props.setor}</p>
      <p>{props.descricao}</p>
      <button onClick={props.remove}><X/></button>
    </DivTarefa>
  )
}
