import React from 'react'
import {Route, Routes} from 'react-router-dom'
import FormTarefas from '../components/FormTarefas'
import Home from '../components/Home'
import ListaTarefas from '../components/ListaTarefas'

export default function MainRoutes() {
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/lt' element={<ListaTarefas/>}/>
        <Route path='/add' element={<FormTarefas/>}/>
    </Routes>
    </>
}