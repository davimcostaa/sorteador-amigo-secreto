import { useListaDeParticipante } from "./useListaDeParticipante"
import { useSetRecoilState } from "recoil"
import { resultadoDoAmigoSecreto } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"

export const useSorteador = () => {

    const participantes = useListaDeParticipante()
    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)

    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado)
    }
}