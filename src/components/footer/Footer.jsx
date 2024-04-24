import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Crazybarber</div>
      <div className={styles.text}>Nikola Petrovic © All rights reserved.</div>
    </div>
  )
}

export default Footer
