import styles from './form.module.css'
import Image from 'next/image'

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
                        <div id="or">
                            <p>OR</p>
                        </div>
                        <a href="#" className={styles.facebookLogin}>Log in with Facebook</a>
                        <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                </form>
                <div className={styles.signUp}>
                    <p className='signUpLink'>Don't have an account? <a href="#" className={styles.signUpLink}>Sign up</a></p>
                </div>
                <div className={styles.getApp}>
                    <p className={styles.getAppText}>Get the app.</p>
            </div>
            <div>
            <Image src={'/images/downloadbtn.png'} alt="download" width={136} height={40} className='downloadBtn'/>
            <Image src={'/images/googleplaybtn.png'} alt="google play" width={155} height={58} className='googlePlay'/>
            </div>
        </div>
        </div>
        </>
    )
}