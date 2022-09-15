import React from 'react'
import ListaTarefas from './components/ListaTarefas'
import { DivApp } from './components/style/styled'


export default function App() {

  return (
    <DivApp>
        <h1>Estudo sobre styled-components</h1>
        <ListaTarefas/>
    </DivApp>
  )
}
