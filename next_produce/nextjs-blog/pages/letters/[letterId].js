function Letter({ letter }) {
  return (
    <>
      <h1>Letter</h1>
      <hr />
      <h2>
        {letter.id} {letter.title}
      </h2>
      <p>
        {letter.body}
      </p>
    </>
  )
}

export default Letter;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { letterId: '1' } },
      { params: { letterId: '2' } },
      { params: { letterId: '3' } },
    ],
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${ params.letterId }`);
  const data = await response.json();

  return {
    props: {
      letter: data
    }
  }

}
