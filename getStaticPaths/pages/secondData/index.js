export default function FirstData({ data }) {

  return (
    <>
      <h2>這是 second data page</h2>
      <br />
      {
        data.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
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
  const reply = await response.json();


  return {
    props: {
      data: reply
    }
  }
}