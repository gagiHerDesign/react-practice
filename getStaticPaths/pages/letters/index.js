import Link from "next/link";
import style from '../../styles/listLetters.module.css';

function LetterList({ letters }) {
  return (
    <div className={style.container}>
      <h1>List of letters</h1>
      {
        letters.map((letter) => {
          return (
            <div key={letter.id} className={style.list}>
              {/* Link 的pass 屬性  */}
              <Link href={`/letters/${ letter.id }`}
                className={style.link}>
                <h2>
                  {letter.id}
                  <br />
                  {letter.title}
                </h2>
              </Link>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      // case1: 只回傳前三筆
      // letters: data.slice(0, 3)
      // case2: 所有的data
      letters: data
    }
  }
}

export default LetterList
