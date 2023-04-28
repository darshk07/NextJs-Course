import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css' 


export default function Home() {

  // console.log(styles)
  return (
    <div className={styles.container}>
<<<<<<< HEAD
=======
       <style jsx>
         {`
          h2{
            font-size: 38px;
          }
          h3{
            font-size: 28px;
          }
         `}
       </style>
>>>>>>> parent of 8212922 (Tutorial 28)
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
<<<<<<< HEAD

      <main className={styles.main}>
        <div className={styles.imagewrap}>
          {/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
          <img className={styles.myImg} src="/homeimg.jfif" width={237} height={158} alt="hunting coder" />
        </div>
        <h1 className={styles.title}>
          <span className='dummy'>&lt;HuntingCoder/&gt;</span>
        </h1>

        <div>
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit!</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
=======
      {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><a><li>Home</li></a></Link>
          <Link href='/about'><a><li>About</li></a></Link>
          <Link href='/blog'><a><li>Blog</li></a></Link>
          <Link href='/contact'><a><li>Contact</li></a></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className='dummy'>Hunting Coder</span>
        
        </h1>
        <div className={styles.imagewrap}> 
<<<<<<< HEAD
{/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
<img className={styles.myImg} src="/homeimg.jfif" width={237} height={158} alt="hunting coder" />
>>>>>>> parent of 8212922 (Tutorial 28)
=======
<Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/>
>>>>>>> parent of 2ade68a (Tutorial 23)
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

      {/* <div className={`${styles1.con} ${styles2.con}`}> */}
      <div>
        <h2>Popular Blogs</h2>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
