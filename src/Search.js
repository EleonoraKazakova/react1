import React, { useState, useEffect } from "react";
import "./Search.css";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const makeRequest = async () =>
      setData(
        (await (await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`))
          .json())
          .hits
      );
    makeRequest();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        className="block"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div>
        {data.map((article) => (
          <p key={article.title} className="Search-text">
            <a href={article.url}>{article.title}</a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Search;
