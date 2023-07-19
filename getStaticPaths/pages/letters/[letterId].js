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
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // 取得所有100筆資料的id
  const paths = data.map(letter => {
    return {
      params: {
        letterId: `${ letter.id }`
      }
    }
  })

  return {
    // paths: [
    //   { params: { letterId: '1' } },
    //   { params: { letterId: '2' } },
    //   { params: { letterId: '3' } },
    // ],
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  // 這個context包含了params物件，裡面有letterId屬性
  const { params } = context;
  console.log(context);
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${ params.letterId }`);
  const data = await response.json();

  return {
    props: {
      letter: data
    }
  }

}
