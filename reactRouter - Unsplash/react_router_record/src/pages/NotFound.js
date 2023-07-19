import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <>
      <h1>404 Not Found</h1>
      <p>找不到網頁</p>
    </>
  )
}