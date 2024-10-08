"use client"
import Link from "next/link";
import styles from ".//Contact.module.css";

export default function ContactPage () {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>This Is My Contact Page</h2>
            <p className={styles.main}>For any query/information contact me at <span className={styles.email}>saba_punjwani@yahoo.com</span> </p>
            <Link href = "/" className={styles.link}>Go to PortFolioWebsite</Link>
        </div>
    )
}