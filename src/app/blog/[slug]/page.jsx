import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getPost } from '@/lib/data'

//DYNAMIC METADATA FOR SEO FOR SINGLE BLOG
export const generateMetadata = async ({ params }) => {
  const { slug } = params

  console.log('slug', slug)

  const post = await getPost(slug)

  return {
    title: post?.title,
    description: post?.desc,
  }
}

// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}` // using desctructured params we can access to slug
//   )
//   if (!res.ok) {
//     throw new Error('something went wrong')
//   }

//   // console.log('resss', res)
//   return res.json()
// }

const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${slug}` // using desctructured params we can access to slug
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
  //MONG-DB fetch
  // const post = await getPost(slug)
  //API jsonplaceholder fetch
  const post = await getData(slug)

  // const formattedCreatedAt = new Date(post.createdAt).toLocaleString()
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image
            src={post?.img}
            alt="singlePostImg"
            fill
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {/* <Image
            src={post?.img}
            alt="avatar"
            width={30}
            height={30}
            className={styles.avatar}
          /> */}

          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post?.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detaiTitle}>Pubisheds</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt && post.createdAt.toString()} */}
              01.11.2023
            </span>
            {/* <p>asdaw{post.createdAt}</p> */}
          </div>
        </div>
        <div className={styles.contact}>{post.desc}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
