import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'

// IN SERVER COMPONENT WE CAN ACCESS OUR PATHNAME OR QUERRY ONLY IF WE DESTRUCTURE IN FUNCTION
//http://localhost:3000/blog/post?q=test

const SinglePostPage = ({ params, searchParams }) => {
  // console.log('PARAMS IZ SLUG', params) // => blog
  // console.log('QUERY IZ SLUG', searchParams)  // => test
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/about.png"
            alt="avatar"
            width={30}
            height={30}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detaiTitle}>Author</span>
            <span className={styles.detailValue}>Date</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detaiTitle}>Pubished</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.contact}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ex
          autem neque id recusandae assumenda atque iste quae omnis inventore
          exercitationem deserunt temporibus, vero, maxime aut animi dolore
          ullam. Labore.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
