import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro"

const Formulario = () => {

  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()

  const adicinarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault()
      adicionarNaLista(nome)
      setNome("")
      inputRef.current?.focus()
  }

  const mensagemDeErro = useMensagemDeErro()

  return (
    <form onSubmit={adicinarParticipante}>

        <input 
        ref={inputRef}
        value={nome}
        onChange={evento => setNome(evento.target.value)}
        type='text' placeholder='Insira os nomes dos participantes' />

        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
        
    </form>
  )
}

export default Formulario