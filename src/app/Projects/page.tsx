"use client"
import Link from "next/link";
import styles from ".///Projects.module.css";

export default function ProjectsPage () {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>This Is My Projects Page</h2>
            <ol className={styles.main}>
                <li>Simple Calculator Using TypeScript</li>
                <li>Currency Converter Using TypeScript</li>
                <li>Number Guessing Game Project Using TypeScript</li>
                <li>ATM Machine Project Using TypeScript</li>
                <li>Word Counter Project Using TypeScript</li>
                <li>Object Oriented Programming Project Using TypeScript</li>
            </ol>
            <Link href = "/" className={styles.link}>Go to PortFolioWebsite</Link>
        </div>
    )
}