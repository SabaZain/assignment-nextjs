"use client"
import Link from "next/link";
import styles from ".////Skills.module.css";


export default function SkillsPage () {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>This Is My Skills Page</h2>
            <ul className={styles.main}>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            </ul>
            <Link href = "/Skills/My-Skills" className={styles.link}>Go to My Skills Page</Link>
            <br/>
            <br/>
            <Link href = "/" className={styles.link}>Go to PortFolioWebsite</Link>
        </div>
    )
}