import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, NotFound } from "./pages";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumContent from "./pages/AlbumContent";
import AlbumPhoto from "./pages/AlbumPhoto";
import AlbumSearch from "./pages/AlbumSearch";
// import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/album" element={<AlbumLayout />}>
            {/* 表示預設載入是index */}
            <Route index element={<AlbumIndex />}></Route>
            <Route path="search" element={<AlbumSearch />}></Route>
            {/* 動態路由 */}
            <Route path=":id" element={<AlbumPhoto />}></Route>
            <Route path="content" element={<AlbumContent />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>)
}

export default App;
