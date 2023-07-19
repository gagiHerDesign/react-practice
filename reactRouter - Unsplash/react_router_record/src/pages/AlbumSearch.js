import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios"
import List from "../components/List";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumSearch() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   console.log('searchParams', searchParams.get('query'));

  //   setSearchParams({ query: 'building' });
  // }, []);

  useEffect(() => {
    if (search !== '') {
      (async () => {
        const response = await axios.get(`${ api }?client_id=${ accessId }&query=${ search }`)
        const { results } = response.data;
        setList(results);
      })();
    }
  }, [search]);

  useEffect(() => {
    setSearch(searchParams.get('query'));
  }, [searchParams])

  return (
    <>
      <h1>Album Search</h1>
      {search}
      <input type="text" className="form-control"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setSearchParams({ query: e.target.value });
          }
        }}
      />
      <List list={list}></List>
    </>
  )
}