import styles from './sobre.module.css'
import Image from 'next/image'

const Sobre = () => {
  return (
    <section id='suporte' className={styles.sobre}>
      <div id='container' className='container'>
        <div>
            <Image 
                src={'/sobre.jpg'}
                width={800}
                height={600}
                alt='Foto do octane'
                id={styles.foto}
                />
        </div>
        <div id={styles.text_sobre}>
          <h1>Rocket League</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, eum! Repellat, enim necessitatibus qui dolores odio impedit delectus, repellendus architecto in non at veniam. Aperiam at quam beatae reprehenderit quidem?</p>
        </div>
      </div>
    </section>
  )
}

export default Sobre