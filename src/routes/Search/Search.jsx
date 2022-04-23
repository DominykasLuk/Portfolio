import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import Table from '../../components/table/Table'

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

return (
  <section id='search'>
    <h5>What Skills I have</h5>
    <h2>Search</h2>
    <div className="container search__container">
      <div className="login">
        <div className="search__content">
          <input type="text" className='search' placeholder='Search:' onChange={(e) => setQuery(e.target.value.toLowerCase())} />
          {<Table data={data} />}
        </div>
      </div>
    </div >
  </section >
)
}

export default Search