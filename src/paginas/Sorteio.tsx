import React, { useState } from 'react'
import { useListaDeParticipante } from '../state/hooks/useListaDeParticipante'
import { useResultadoDoSorteio } from '../state/hooks/useResultadoDoSorteio'

const Sorteio = () => {

    const participantes = useListaDeParticipante()
    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoDoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>)=> {
      evento.preventDefault()
      if (resultado.has(participanteDaVez)) {
        setAmigoSecreto(resultado.get(participanteDaVez)!)
      }
      
    }

  return (
    <section>
        <form onSubmit={sortear}>
            <select 
              required name="participanteDaVez" 
              id="participanteDaVez" 
              placeholder='Selecione o seu nome'
              value={participanteDaVez}
              onChange={evento => setParticipanteDaVez(evento.target.value)}
              >
                {participantes.map(participante => <option key={participante}>{participante}</option>)}
            </select>
            <button>Sortear</button>
        </form>
        {amigoSecreto && <p role='alert'> {amigoSecreto} </p>}
    </section>
  )
}

export default Sorteio