import styles from './footer.module.css'

const Footer = () => {

    const ano = new Date().getFullYear()

  return (
    <footer id={styles.footer}>
        <h3>&copy; {ano}  Todos os direitos reservados a Psyonix</h3>
    </footer>
  )
}

export default Footer