import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css' 
import Link from 'next/link';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(()=>{
    console.log("useeffect is running");
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();})
      .then((parsed)=>{ 
        console.log(parsed)
        setBlogs(parsed)
    })
=======
  useEffect(() => {
=======
  useEffect(()=>{
>>>>>>> parent of b578836 (Tutorial 20)
    console.log("useeffect is running");
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();})
      .then((parsed)=>{ 
        console.log(parsed)
        setBlogs(parsed)
<<<<<<< HEAD
      })
>>>>>>> parent of 0d376ab (Tutorial 22)
=======
    })
>>>>>>> parent of b578836 (Tutorial 20)
  }, [])
  return <div className={styles.container}>
    <main className={styles.main}> 
      {blogs.map((blogitem)=>{
        return <div key={blogitem.slug}>
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
        <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
      </div>
      })} 
  </main>
</div>
};

export default Blog;
