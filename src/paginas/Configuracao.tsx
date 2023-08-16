import React from 'react'
import Cabecalho from '../componentes/Cabecalho'
import Card from '../componentes/Card'
import Formulario from '../componentes/Formulario/Formulario'
import ListaParticipantes from '../componentes/ListaParticipantes'
import Rodape from '../componentes/Rodape/Rodape'

const Configuracao = () => {
  return (
    <>
        <Cabecalho />
        <Card>
            <Formulario />
            <ListaParticipantes />
            <Rodape />
        </Card>

    </>
  )
}

export default Configuracao