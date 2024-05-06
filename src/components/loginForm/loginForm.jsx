'use client'
import { login } from '@/lib/actions'
import styles from './loginForm.module.css'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginForm = () => {
  // state is information from return: from lib/actions
  // if return is {error: "user allready exist"} , it will be in state
  // aswell as success : true
  const [state, formAction] = useFormState(login, 0)
  const router = useRouter()

  //   useEffect(() => {
  //     state?.success && router.push('/login')
  //   }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />

      <button>Login</button>
      {state?.error}

      <Link href="/register">
        Do not have ann account? <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm
