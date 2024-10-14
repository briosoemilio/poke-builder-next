"use client"
import React, { useEffect, useRef } from 'react'
import useFetchPosts from '../useFetchPosts'

import HomePageCard from './HomePageCard'
import { Button } from '../../_components'
import { useRouter } from 'next/navigation'

export const HomePagePosts = () => {
  const { posts } = useFetchPosts()
  const router = useRouter()

  return (
    <div>
      {posts.map((post, index) => (
        <HomePageCard post={post} index={index} />
      ))}
    </div>
  )
}
