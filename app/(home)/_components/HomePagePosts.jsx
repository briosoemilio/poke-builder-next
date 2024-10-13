"use client"
import React from 'react'
import useFetchPosts from '../useFetchPosts'

export const HomePagePosts = () => {
  const { posts } = useFetchPosts()

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="mb-4">
          <h2 className="text-xl font-semibold">{post.title.rendered.slice(4)}</h2>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
      ))}
    </div>
  )
}
