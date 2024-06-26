import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({ post }) => {
  // const formattedCreatedAt = post && new Date(post?.createdAt).toLocaleString()

  //------------------ ALL SINGLE POSTS IN BLOG SECTION
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}

        {/* <span className={styles.date}>{formattedCreatedAt}</span> */}
        <span className={styles.date}>01.11.2023</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default PostCard
