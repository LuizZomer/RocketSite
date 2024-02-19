import styles from './suporte.module.css'

const Suporte = () => {
  return (
    <section>
      <div className={`container ${styles.suporte_container}`} id='suporte'>
      <h2>Suporte</h2>
        <form>
            <div id={styles.form}>
                <label>
                    <span>Titulo:</span>
                    <input type="text" name="" id="" placeholder='Sobre oque você precisa de ajuda?' />
                </label>
            </div>
            <div id={styles.form}>
                <label>
                    <span>Problema:</span>
                    <textarea name="" id="" cols="58" rows="20" placeholder='Conte-nos o problema que você tem passado...'></textarea>
                </label>
            </div>
            <button id={styles.btn_submit}>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Suporte