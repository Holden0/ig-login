import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
    return(
        <>
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.footerLinks}>
                    <Link href="#" className={styles.footerLink}>Meta</Link>
                    <Link href="#" className={styles.footerLink}>About</Link>
                    <Link href="#" className={styles.footerLink}>Blog</Link>
                    <Link href="#" className={styles.footerLink}>Jobs</Link>
                    <Link href="#" className={styles.footerLink}>Help</Link>
                    <Link href="#" className={styles.footerLink}>API</Link>
                    <Link href="#" className={styles.footerLink}>Privacy</Link>
                    <Link href="#" className={styles.footerLink}>Terms</Link>
                    <Link href="#" className={styles.footerLink}>locations</Link>
                    <Link href="#" className={styles.footerLink}>Instagram Lite</Link>
                    <Link href="#" className={styles.footerLink}>Threads</Link>
                    <Link href="#" className={styles.footerLink}>Contact</Link>
                    <Link href="#" className={styles.footerLink}>Contacting Uploading & None Users</Link>
                    <Link href="#" className={styles.footerLink}>Meta Verified</Link>

                </div>
                <div className={styles.footerCopy}>
                    <p className={styles.footerCopyText}>© 2024 Instagram from Meta</p>
                </div>
            </div>
        </div>
        </>
    )

}