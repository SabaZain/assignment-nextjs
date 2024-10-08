import Link from "next/link";
import styles from "./page.module.css"

export default function PortfolioWebsite () {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome To My Portfolio Website</h1>
      <nav>
        <ul className={styles.main}>
          <li><Link href = "/Home" target="_blank" className={styles.link}>Home</Link></li>
          <li><Link href = "/About" target="_blank" className={styles.link}>About</Link></li>
          <li><Link href = "/Skills" target="_blank" className={styles.link}>Skills</Link></li>
          <li><Link href = "/Projects" target="_blank" className={styles.link}>Projects</Link></li>
          <li><Link href = "/Contact" target="_blank" className={styles.link}>Contact</Link></li>
        </ul>
      </nav>
      
    </div>
  )
}
