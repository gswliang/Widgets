import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState("taiwan");
  const [debounceInput, setDebounceInput] = useState(input);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceInput(input);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [input]);

  useEffect(() => {
    const apiSearch = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debounceInput,
        },
      });
      setResult(data.query.search);
    };

    if (debounceInput) {
      apiSearch();
    }
  }, [debounceInput]);

  const renderedResult = result.map((item) => {
    return (
      <div key={item.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Search:</label>
          <input
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResult}</div>
    </div>
  );
};

export default Search;
