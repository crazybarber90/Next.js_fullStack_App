import PostCard from '@/components/postCard/postCard'
import React from 'react'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// const getData = async () => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts',
//     { cache: 'no-store' }
//     // not caching data, slower fetch but always fresh data!
//     // if you have data that is constantly changing, use no-store, but if you have blog that you update every week, cache it (do nothing !)
//     // { next: { revalidate: 30000 } } =>>>> refresh data every 30sec
//   )

//   if (!res.ok) {
//     throw new Error('something went wrong')
//   }

//   return res.json()
// }

const BlogPage = async () => {
  // const posts = await getData()

  const posts = await getPosts()

  // console.log('POST IZ BLOGA', posts)

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
