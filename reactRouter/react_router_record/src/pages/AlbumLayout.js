import { Link, Outlet } from "react-router-dom"


export default function AlbumLayout() {
  return (
    <>
      <h1>Album Layout</h1>
      <div className="row">
        <div className="col-4 bg-secondary rounded text-light p-3">
          左側欄位:<br />
          預設是index，<br />
          點擊下面的link可以連到album裡面的content<br />
          <Link className="nav-link" to="/album/index">
            <button className="btn btn-light w-100 my-1">index</button>
          </Link>
          <Link className="nav-link" to="/album/content">
            <button className="btn btn-light w-100 my-1">content</button>
          </Link>
        </div>
        <div className="col-8">
          <Outlet />
        </div>

      </div>
    </>
  )
}