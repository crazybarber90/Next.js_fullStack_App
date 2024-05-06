'use client'
import { register } from '@/lib/actions'
import styles from './registerForm.module.css'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RegisterForm = () => {
  // state is information from return: from lib/actions
  // if return is {error: "user allready exist"} , it will be in state
  // aswell as success : true
  const [state, formAction] = useFormState(register, 0)
  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/login')
  }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Regirste</button>
      {state?.error}

      <Link href="/login">
        Have ann account? <b>Login</b>
      </Link>
    </form>
  )
}

export default RegisterForm
