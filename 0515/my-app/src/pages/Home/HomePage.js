import { useState } from 'react';

import Edit from './components/Edit';
import List from './components/List';
import '../Home/HomeStyle.css';

const Home = () => {

  const [data, setData] = useState([]);

  return <div className='app'>

    <Edit add={setData} />
    <List listData={data} />
  </div>
}

export default Home;