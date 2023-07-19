import '../styles/globals.css';

// App 元件是所有頁面共用的最上層元件，你可以使用它來保留頁面間的狀態。
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}