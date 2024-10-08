"use client"
import Link from "next/link";
import styles from ".//About.module.css"

const AboutPage = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>This Is My About Page</h2>
            <p className={styles.main}>I have done MBA(Finance) from Mohammad Ali Jinnah University . Currently I have been selected for the Course - Cloud Applied Generative Artificial Intelligence (Governor Sindh Initiative), learning the fundamentals and passionate about building applications.
            Along with this running my own online business.
            <br/>  Looking forward for good opportunity to enhance my career and professional development.</p>
            <Link href = "/" className={styles.link}>Go to PortFolioWebsite</Link>
            </div>
    )
}
export default AboutPage