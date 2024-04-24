import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry, this page does not exist...</p>
      <Link href="/">Go back</Link>
    </div>
  )
}

export default NotFound
