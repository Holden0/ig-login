import styles from './form.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Form() {
    return(
        <>
         <div className= {styles.formOuterContainer}>
            <div className= {styles.formContainer}>
                <form className= {styles.form}>
                <Image src={'/images/logo.png'} alt="logo" width={200} height={70} className={styles.logo}/>
                        <input
                        id = "username"
                        className={styles.userNameInput}
                        type= "text"
                        placeholder="phone number, username, or email"
                        required
                        />
                        <input
                        id = "password"
                        className={styles.passwordInput}
                        type= "password"
                        placeholder="password"
                        />
                        <button className={styles.loginButton}>Log In</button>
                        <div className={styles.orContainer}>
                        <div className={styles.or}><span> OR </span></div>
                        </div>
                        <Link href="#" className={styles.facebookLogin}>Log in with Facebook</Link>
                        <Link href="#" className={styles.forgotPassword}>Forgot Password?</Link>
                </form>
                <div className={styles.signUp}>
                    <p className='signUpLink'>  Don't have an account?   <Link href="#" className={styles.signUpLink}>Sign up</Link></p>
                </div>
                <div className={styles.getApp}>
                    <p className={styles.getAppText}>Get the app.</p>
            </div>
            <div className={styles.downloadImgs}>
            <Image href="#" src={'/images/google-play.png'} alt="download" width={135} height={44} className='downloadBtn'/>
            <Image src={'/images/app-store.png'} alt="google play" width={135} height={42} className='googlePlay'/>
            </div>
        </div>
        </div>
        </>
    )
}