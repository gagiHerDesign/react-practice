import { Link, Outlet } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import List from "../components/List";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumLayout() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${ api }?client_id=${ accessId }&query=animal`)
      const { results } = response.data;
      setList(results);
    })();
  }, []);


  return (
    <>
      <h1>Album Layout</h1>
      <div className="row">
        <div className="col-4 bg-secondary rounded text-light p-3">
          左側欄位:<br />
          <List list={list}></List>
          預設是index，<br />
          點擊下面的link可以連到album裡面的content<br />
          {/* <Link className="nav-link" to="/album/index">
            <button className="btn btn-light w-100 my-1">index</button>
          </Link> */}
          <Link className="nav-link" to="/album/content">
            <button className="btn btn-light w-100 my-1">content</button>
          </Link>
          <Link className="nav-link" to="/album/search">
            <button className="btn btn-light w-100 my-1">search</button>
          </Link>
        </div>
        <div className="col-8">
          <Outlet context={list} />
        </div>

      </div>
    </>
  )
}