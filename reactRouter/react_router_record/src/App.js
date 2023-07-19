import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumContent from "./pages/AlbumContent";

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
            <Route path="content" element={<AlbumContent />}></Route>
          </Route>
        </Routes>
      </div>
    </>)
}

export default App;
