import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`腳本正確地載入，window.FB 已被定義`)
        }
      />
      <h1>First Post</h1>
      <p>
        嗨大家好，我是 JOY
      </p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}