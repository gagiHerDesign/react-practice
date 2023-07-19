import { useState, useEffect } from "react";

export default function FirstData() {
  const [data, setData] = useState([0]);
  const [calendar, setCal] = useState("0");

  const fetchData = () => {
    fetch('https://dummyjson.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((reply) => {
        setData(reply.posts);
        // console.log(getCurrentDate());
      })
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <h2>這是 first data page</h2>
      <h3>{calendar}</h3>
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

