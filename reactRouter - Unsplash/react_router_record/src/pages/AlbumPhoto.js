import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

const api = "https://api.unsplash.com/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${ api }/${ id }?client_id=${ accessId }`)
      setPhoto(response.data);
    })();
  }, [id]);

  return (
    <>
      <button type="button" className="btn btn-outline-primary float-end"
        onClick={() => {
          navigate(-1);
        }}
      >回上頁</button>
      <h1>Album Photo</h1>
      這是單張圖片
      <p>id: {photo.id}</p>
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} alt="123" className="img-fluid" />
    </>
  )
}