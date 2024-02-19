import styles from './encontrar.module.css'
import Image from 'next/image'

const Encontrar = () => {
  return (
    <section id='encontrar' className={styles.encontrar} >
      <div id='container' className='container'>
        <div id={styles.content}>
          <h1>Onde baixar?</h1>
          <p>Após a venda da psyonix(Empresa criadora do Rocket League) o jogo está disponivel gratuitamente pela Epic Games Launcher.</p>
        </div>
        <div>
          <Image 
            src={'/epicLogo.png'}
            width={300}
            height={200}
            alt='Logo da epic games'
            id={styles.logoEpic}
          />
        </div>
      </div>
    </section>
  )
}

export default Encontrar
