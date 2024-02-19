import styles from './esports.module.css'
import Image from 'next/image'

const Esports = () => {
  return (
    <section id='e-sports' className={styles.esports}>
      <div id={styles.container} className='container'>
        <h1 id={styles.title}>E-sports</h1>
        <div id={styles.content}>
          <Image
            src={'/champions.jpg'}
            width={600}
            height={400}
            alt='Foto de campeões do mundial'
            id={styles.foto}
          />
          <div className="">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, assumenda aliquid. Libero atque optio totam dicta beatae quod qui repellat dolores veniam, facilis, animi numquam nemo. Saepe alias ad in?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Esports