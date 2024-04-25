import React from 'react'
import styles from './postUser.module.css'

const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: 'no-store' } // using desctructured params we can access to slug
  )
  if (!res.ok) {
    throw new Error('something went wrong')
  }

  //   console.log('resss', res)
  return res.json()
}

const PostUser = async ({ userId }) => {
  console.log('USER ID IZ FUNKCIJE', userId)
  const user = await getData(userId)

  console.log('USERRR', user)
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  )
}

export default PostUser
