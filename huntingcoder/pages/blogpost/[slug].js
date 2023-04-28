import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css' 

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
<<<<<<< HEAD
<<<<<<< HEAD
const Slug = (props) => {
<<<<<<< HEAD
  function createMarkup(c) {
    return { __html: c };
  }
=======
>>>>>>> parent of 2e5da84 (Tutorial 24)
=======
const slug = (props) => {
>>>>>>> parent of 2ade68a (Tutorial 23)
  const [blog, setBlog] = useState(props.myBlog);


  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
<<<<<<< HEAD
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}


=======
      <div>
        {blog && blog.content}
      </div>
>>>>>>> parent of 2e5da84 (Tutorial 24)
    </main>
  </div>;
};



export async function getServerSideProps(context) {
  // console.log(context.query)
  // const router = useRouter();
  const { slug } = context.query;
   
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  return {
<<<<<<< HEAD
    paths: [
      { params: { slug: 'how-to-learn-flask' } },
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-nextjs' } },
    ],
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;


  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
=======
    props: { myBlog }, // will be passed to the page component as props
>>>>>>> parent of 2ade68a (Tutorial 23)
  }
}
=======
const slug = () => {
    const [blog, setBlog] = useState();
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json();
          })
            .then((parsed) => {
              setBlog(parsed)
            })
    }, [router.isReady])
    
    
    return <div className={styles.container}>
        <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
            {blog && blog.content}
            </div>
        </main>
    </div>;
};

>>>>>>> parent of 0d376ab (Tutorial 22)
export default slug;
