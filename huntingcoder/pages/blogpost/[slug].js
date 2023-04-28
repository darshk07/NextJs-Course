<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, {useState, useEffect} from 'react';
>>>>>>> parent of 0d376ab (Tutorial 22)
=======
import React from 'react';
>>>>>>> parent of b578836 (Tutorial 20)
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css' 

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
<<<<<<< HEAD
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
    const router = useRouter();
    const { slug } = router.query;
    return <div className={styles.container}>
        <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nulla repudiandae sint facilis, sunt corrupti numquam id illo. Ut deserunt animi iste voluptatum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime rem earum repudiandae, cum possimus quae assumenda nulla culpa. Odit architecto repellendus non, unde recusandae placeat nisi perferendis quod nesciunt! Dolorum sapiente et sint consequuntur earum blanditiis iusto reprehenderit molestiae quia eligendi? Exercitationem, officia nobis!
        </div>
        </main>
    </div>;
};

>>>>>>> parent of 0d376ab (Tutorial 22)
=======
const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div className={styles.container}>
        <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nulla repudiandae sint facilis, sunt corrupti numquam id illo. Ut deserunt animi iste voluptatum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime rem earum repudiandae, cum possimus quae assumenda nulla culpa. Odit architecto repellendus non, unde recusandae placeat nisi perferendis quod nesciunt! Dolorum sapiente et sint consequuntur earum blanditiis iusto reprehenderit molestiae quia eligendi? Exercitationem, officia nobis!
        </div>
        </main>
    </div>;
};

>>>>>>> parent of 0d376ab (Tutorial 22)
export default slug;
