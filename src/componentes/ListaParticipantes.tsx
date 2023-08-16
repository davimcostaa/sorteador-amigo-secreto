import { useListaDeParticipante } from "../state/hooks/useListaDeParticipante"

const ListaParticipantes = () => {
    
    const participantes: string[] = useListaDeParticipante()

  return (
    <ul>
        {participantes.map(participante => <li key={participante}>{participante}</li> )}
    </ul>
  )
}

export default ListaParticipantes