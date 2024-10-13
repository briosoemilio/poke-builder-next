"use client"
import Image from "next/image";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://elmos-pokedex.local/wp-json/wp/v2/posts`);
        if (!response.ok) {
          console.log('response not ok')
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log('test1234556', { data: data[0]?.content })
      } catch (error) {
        console.log('error occurred', { error })
      }
    };

    fetchPosts();
  }, [])
  return (
   <div>
    This is home
   </div>
  );
}
