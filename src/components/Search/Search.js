import React, {useEffect, useState} from 'react';
import '../Search/Search.css';

function Search(props) {
  const [data, setData] = useState([]);
  const fetchData = () => {

    return fetch("colas")

      .then((res) => res.json())

      .then((d) => setData(d));

  };

  useEffect(() => {

    fetchData();

  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {

    return data.filter((data) =>

      search_parameters.some((parameter) =>

        data[parameter].toString().toLowerCase().includes(query)

      )

    );

  }

  return (

    <div className="container">

      <div className="input-box">
        <input type="search" name="search-form" id="search-form" className="search-input" onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
      </div>
      <center>
        {search(data).map((dataObj) => {
          return (
            <div className="box">
              <div class="card">
                <div class="category">@{dataObj.username} </div>
                <div class="heading">
                  {dataObj.name}
                  <div class="author">{dataObj.email}</div>
                </div>
              </div>
            </div>
          );
        })}
      </center>
    </div>
  );
}


export default Search;
