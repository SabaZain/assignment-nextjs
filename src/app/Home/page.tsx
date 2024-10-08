"use client"
import Link from "next/link";
import styles from "./Home.module.css";


export default function HomePage () {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>This Is My Home Page</h2>
            <p className={styles.main}>Hi, I am Saba Ali Zain - Future AI Developer</p>
            <Link href = "/" className={styles.link}>Go to PortFolioWebsite</Link>
        </div>
    )
}