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
      <div className={utilStyles.test}>HI, I'm test class! className={utilStyles.test}</div>
      <hr />
      <section>
        <h2>Next.js 的 Routing</h2>
        <ol>
          <li>  基本 Routing --- 檔案結構</li>
          <li>  Nested Routes --- 新檔案夾與 index.js</li>
          <li>  Dynamic Routes --- [productId].js</li>
          <li>  Catch all Routed --- [...params].js，用 useRoutes 取得參數</li>
          <li>  useRouter hook 的 router.push 可以用來當作 redirect 使用</li>
          <li>  Customed 404 page --- 404.js</li>
        </ol>
      </section>
      <hr />
      {/* 測試router.push */}
      使用onClick | router.push |
      <br />
      <button onClick={handleClick}>送出訂單</button>
      <br />
      <hr />
      <Link href="/firstData">點我去 firstData 的頁面</Link>
      <p>這是用原生 react fetch 寫的</p>
      <hr />
      <Link href="/secondData">點我去 secondData 的頁面 </Link>
      <p>這是比較firstData，用getStaticProps 寫的</p>
      <hr />
      <Link href="/letters">點我去 letter 的頁面 </Link>
      <p>這是 getStaticProps 和 getStaticPaths 一起使用所構建的動態路由</p>
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