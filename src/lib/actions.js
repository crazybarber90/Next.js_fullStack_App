//if we are using multiple actions fro server we dont have to use 'use server' in every single file, we can add it on top
'use server'

import { revalidatePath } from 'next/cache'
import { Post, User } from './models'
import { signIn, signOut } from './auth'
import bcrypt from 'bcryptjs'

const { connectToDb } = require('./utils')

export const addPost = async (formData) => {
  //   'use server'
  const { title, desc, slug, userId } = Object.fromEntries(formData)

  console.log(title, desc, slug, userId)

  try {
    connectToDb()
    const newPost = new Post({
      title: title,
      desc: desc,
      slug: slug,
      userId: userId,
    })
    // in development mode, it will automaticly refresh data but in production, will not revalidate data so we must refresh data after creating new post
    revalidatePath('/blog')
    //=--------------------------------
    await newPost.save()
    console.log('New post saved to db')
  } catch (error) {
    console.log(error)
    return { error: 'something went wrong with adding post' }
  }
}

export const deletePost = async (formData) => {
  //   'use server'
  const { id } = Object.fromEntries(formData)
  try {
    connectToDb()
    // console.log('id od posta', id)
    await Post.findByIdAndDelete(id)

    console.log('Deleted post from db')
    revalidatePath('/blog')
  } catch (error) {
    console.log(error)
    return { error: 'something went wrong with adding post' }
  }
}

export const handleGithubLogin = async () => {
  'use server'
  await signIn('github')
}

export const handleLogout = async () => {
  'use server'
  await signOut()
}

export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    return 'Passwords does not match'
  }

  try {
    connectToDb()

    const user = await User.findOne({ username })

    console.log('USER', user)

    if (user) {
      return 'User allready exist'
    }

    // HASH PASSWORD BEFORE REGISTER USER WITH BCRYPT LIBRARY
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    })
    await newUser.save()
    console.log('New user shas been created')
  } catch (error) {
    console.log(error)
    return { error: 'something went wrong with creating new user' }
  }
}

export const login = async (formData) => {
  console.log('LOGIN TRIGER')
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
    console.log('LOGIN ACTION TRIGGERED')
  } catch (error) {
    console.log(error)
    return { error: 'something went wrong with logining user' }
  }
}
