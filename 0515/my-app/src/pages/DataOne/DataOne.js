import { useEffect } from 'react';
import axios from 'axios';


const DataOne = () => {

  useEffect(() => {
    (async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(result);
    })();
  }, []);


  return <div >
    <h1>454</h1>

  </div>
}

export default DataOne;