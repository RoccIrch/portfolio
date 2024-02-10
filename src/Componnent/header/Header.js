import Link from 'next/link'
import styles from '../../styles/header.module.css'

export default function header() {
  return (
    <header>
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h1>Antoine Laroche</h1>
                <h4>Developpeur Junior</h4>
            </div>
            <div className={styles.blobContainer}>
                <div className={styles.firstBlob}></div>
                <div className={styles.secondBlob}></div>
                <div className={styles.thirdBlob}></div>
            </div>
        </div>
       <nav className={styles.navigation}>
            <ul>
                <li><Link href="">Présentation</Link></li>
                <li><Link href="">Compétences</Link></li>
                <li><Link href="">Contact</Link></li>
            </ul>
       </nav>
    </header>
  )
}
