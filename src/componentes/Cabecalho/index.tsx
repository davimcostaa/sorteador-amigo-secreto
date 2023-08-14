import styles from './Cabecalho.module.css'

const Cabecalho = () => {

  return (
    <header className={styles.header}>
        <div className={styles.imagemLogo} role="img" aria-label='Logo do Sorteador'></div>
          <img className={styles.imagemCabecalho} src="/imagens/Imagem Cabecalho.png" alt="Desenho de uma pessoa vestida de laranja segurando um quadro" />
    </header>
  )
}

export default Cabecalho