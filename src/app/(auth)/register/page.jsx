import { register } from '@/lib/actions'
import React from 'react'
import styles from './register.module.css'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input
            type="password"
            placeholder="password again"
            name="passwordRepeat"
          />
          <button>Regirste</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
