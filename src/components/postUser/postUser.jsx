import React from 'react'
import styles from './postUser.module.css'
import { getUser } from '@/lib/data'
import Image from 'next/image'

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: 'no-store' } // using desctructured params we can access to slug
//   )
//   if (!res.ok) {
//     throw new Error('something went wrong')
//   }

//   //   console.log('resss', res)
//   return res.json()
// }

const PostUser = async ({ userId }) => {
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      {user.img && (
        <Image
          src={user.img}
          alt="avatar"
          width={30}
          height={30}
          className={styles.avatar}
        />
      )}
      <div className="texts">
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div>
  )
}

export default PostUser
