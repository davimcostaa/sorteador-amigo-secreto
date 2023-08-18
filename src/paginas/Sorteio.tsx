import React, { useState } from 'react'
import Card from '../componentes/Card'
import { useListaDeParticipante } from '../state/hooks/useListaDeParticipante'
import { useResultadoDoSorteio } from '../state/hooks/useResultadoDoSorteio'
import styles from './Sorteio.module.css'
import Cabecalho from '../componentes/Cabecalho'

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

    <> 
      <Cabecalho />
        <Card>
          <section className={styles.sorteio}>
            <form onSubmit={sortear}>
                <select 
                  required name="participanteDaVez" 
                  id="participanteDaVez" 
                  placeholder='Selecione o seu nome'
                  value={participanteDaVez}
                  onChange={evento => setParticipanteDaVez(evento.target.value)}
                  >
                    <option disabled>Selecione o seu nome</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <button className={styles.botaoSortear}>Sortear</button>
            </form>
            {amigoSecreto && <p role='alert'> {amigoSecreto} </p>}

            <footer className={styles.sorteio}>
                    <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
                </footer>
        </section>
        </Card>
    </>
    
   
    
  )
}

export default Sorteio