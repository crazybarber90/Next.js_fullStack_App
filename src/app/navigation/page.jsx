'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavgationTestPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  //CLIENT SIDE NAVIGATION

  //http://localhost:3000/navigationTest?q=test&desc=asdasd&price=1000

  //------------- useSearchParams                  "use client"
  // this is way to get every query from url like "q" , "desc" , "price" ...
  const q = searchParams.get('q')
  // console.log('QUERY', q)

  // ------------- usePathname                     "use client"
  // pathname is client method to get propery from url and pathname is navigationTest
  console.log('pathname ---- >', pathname)

  // -------------- useRouter                       "use client"
  const handleClick = () => {
    // console.log('CLICKEEED')
    router.push('/') // push("/") , replace("/home") , refresh() , back() , forward()
  }

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  )
}

export default NavgationTestPage
