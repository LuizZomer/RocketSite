import { times } from "../../../teams"
import Image from "next/image"
import styles from './times.module.css'

const Times = () => {

  return (
    <section id={styles.orgs}>
        <div className="container" id={styles.container_time}>
            <h3 id={styles.title}>Algumas Organização participantes:</h3>
            <div id={styles.time_grid}>
            {times.map((time, index) => (
                <div key={index} className={styles.time}>
                    <Image
                        src={time.foto}
                        width={100}
                        height={100}
                        alt={time.nome}
                        className={styles.foto}
                    />
                    <span>{time.nome}</span>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Times