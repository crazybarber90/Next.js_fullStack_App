//if we are using multiple actions fro server we dont have to use 'use server' in every single file, we can add it on top
'use server'

import { revalidatePath } from 'next/cache'
import { Post } from './models'
import { signIn, signOut } from './auth'

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
    console.log('id od posta', id)
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
