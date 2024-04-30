//================== these are session and methods from auth.js for github
import { handleGithubLogin } from '@/lib/actions'

import React from 'react'

// session of github credentials => user object {name, email, image}

const LoginPage = () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>login with GitHub</button>
      </form>
    </div>
  )
}

export default LoginPage
