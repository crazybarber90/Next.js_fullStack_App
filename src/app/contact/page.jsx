import Image from 'next/image'
import styles from './contact.module.css'

// export const metadata = {
//   title: 'Contact Page',
//   description: 'Contact description',
// }

//====================================================== HYDRATION

//HYDRATION POTENTIAL ISSUE's
//this is a comm potential issue with hydration i

//this is the most common error that can occur in the next project regarding hydration, because one value of the variable appears on the server, because the function is certainly triggered first on the server

// const a = Math.random()
// console.log('a random numberas ', a)
// ON CLIENT a random numberas  0.07542550531041625
// ON SERVER a random numberas  0.7126854815407451

// regardless of whether the component is client-side, and then only on the client-side and various values ​​of the same variable lead to a conflict

//====================================================== HYDRATION

export const metadata = {
  title: 'Contact page',
  description: 'Contact desc',
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
