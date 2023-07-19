import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ allPostsData }) {
  const router = useRouter();

  const handleClick = () => {
    console.log('送出訂單');
    router.push('/posts/first-post');
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
      {/* 下方文章列表 */}
      <section className={`${ utilStyles.headingMd } ${ utilStyles.padding1px }`}>
        <hr />
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              <Link href={`/posts/${ id }`}><button className={utilStyles.btn}>GO</button></Link>
            </li>
          ))}
        </ul>
      </section>
      {/* 測試router.push */}
      <button onClick={handleClick}>送出訂單</button>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}