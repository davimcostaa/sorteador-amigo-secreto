import React from 'react'
import { useListaDeParticipante } from '../state/hooks/useListaDeParticipante'
import { useNavigate } from 'react-router-dom'

const Rodape = () => {

    const participantes = useListaDeParticipante()
    // const navegarPara = useNavigate()

  return (
    <footer>
        <button disabled={participantes.length < 3}>Iniciar brincadeira!</button>
    </footer>
  )
}

export default Rodape