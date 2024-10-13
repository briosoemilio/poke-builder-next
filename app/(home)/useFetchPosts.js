import React, { useEffect, useState } from "react";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/wp/v2/posts`);
        if (!response.ok) {
          console.log('response not ok')
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        const sortedPosts = data.sort((a, b) => {
          const titleA = a.title.rendered.toLowerCase();
          const titleB = b.title.rendered.toLowerCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });

        setPosts(sortedPosts)
      } catch (error) {
        console.log('error occurred', { error })
      }
    };
    fetchPosts();
  }, [])

  return { posts }
}

export default useFetchPosts