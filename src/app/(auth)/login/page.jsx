//================== these are session and methods from auth.js for github
import LoginForm from '@/components/loginForm/loginForm'
import { handleGithubLogin } from '@/lib/actions'
import styles from './login.module.css'

// session of github credentials => user object {name, email, image}

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
