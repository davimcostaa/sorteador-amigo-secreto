import React from 'react'
import { useListaDeParticipante } from '../../state/hooks/useListaDeParticipante'
import { useNavigate } from 'react-router-dom'
import styles from './Rodape.module.css'

const Rodape = () => {

    const participantes = useListaDeParticipante()
    const navegarPara = useNavigate()
    const iniciar = () => {
      navegarPara('/sorteio')
    }

  return (
    <footer className={styles.rodapeConfiguracoes}>
        <button className={styles.botao} disabled={participantes.length < 3} onClick={iniciar} >Iniciar brincadeira!</button>
        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}

export default Rodape