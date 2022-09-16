import React from 'react'
import styled from "styled-components"
// criando o modulo de estilo
const DivTarefa =styled.div`
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height:200px;
    margin: 10px;
    h2,p{padding-bottom:10px;}
`
   
export default function Tarefa(props) {
  return (
    <DivTarefa>
        <h2>{props.titulo}</h2>
        <p>Para : {props.setor}</p>
        <p>{props.descricao}.</p>
    </DivTarefa>
  )
}

