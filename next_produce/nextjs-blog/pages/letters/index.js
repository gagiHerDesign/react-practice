import Link from "next/link";

function LetterList({ letters }) {
  return (
    <>
      <h1>List of letters</h1>
      {
        letters.map((letter) => {
          return (
            <div key={letter.id}>
              <Link href={`/letters/${ letter.id }`} pass>
                <h2>
                  {letter.title}
                  {letter.body}
                </h2>
              </Link>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      letters: data.slice(0, 3)
    },
  }
}

export default LetterList
