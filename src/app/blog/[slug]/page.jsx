import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'

const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}` // using desctructured params we can access to slug
  )
  if (!res.ok) {
    throw new Error('something went wrong')
  }

  // console.log('resss', res)
  return res.json()
}

// IN SERVER COMPONENT WE CAN ACCESS OUR PATHNAME OR QUERRY ONLY IF WE DESTRUCTURE IN FUNCTION
//http://localhost:3000/blog/post?q=test

const SinglePostPage = async ({ params, searchParams }) => {
  // console.log('PARAMS IZ SLUG', params) // => blog
  // console.log('QUERY IZ SLUG', searchParams)  // => test

  const { slug } = params
  const post = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="singlePostImg"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/about.png"
            alt="avatar"
            width={30}
            height={30}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.id} />
          </Suspense>
          {/* <div className={styles.detailText}>
            <span className={styles.detaiTitle}>Author</span>
            <span className={styles.detailValue}>Date</span>
          </div> */}
          <div className={styles.detailText}>
            <span className={styles.detaiTitle}>Pubished</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.contact}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
