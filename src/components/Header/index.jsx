import Imagem from 'next/image'
import styles from "./header.module.css";
import Link from 'next/link';


const Header = () => {
  return (
    <header id={styles.header}>
        <Imagem
            src="/logoRocket.png"
            width={200}
            height={150}
            alt='Logo do rocket league'
            id={styles.logo}
        />
        <nav id={styles.navbar}>
          <ul>
            <li><Link href='#sobre' className={styles.link}>Sobre Rocket League</Link></li>
            <li><Link href='#encontrar' className={styles.link}>Onde encontrar</Link></li>
            <li><Link href="#e-sposts" className={styles.link}>E-sports</Link></li>
            <li><Link href='#suporte' className={styles.link}>Suporte</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header