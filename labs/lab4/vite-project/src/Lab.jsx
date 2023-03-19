import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import Table from "./component/Table";
import Button from "./component/Button";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";

export default function Lab() {
  const [result1, setResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState("React");

  //set search top stories

  const setSearchTopStories = (result) => {
    const { hits, page } = result;

    const oldHits = page !== 0 ? result1.hits : [];

    const updatedHits = [...oldHits, ...hits];

    setResult({
      hits: updatedHits,
      page
    });
  };

  //fetching function
  const fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`
    )
      .then((response) => response.json())
      .then((result) => setSearchTopStories(result))
      .catch((err) => err);
  };

  //on search change
  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //on Search submit
  const onSearchSubmit = (event) => {
    event.preventDefault();
    fetchSearchTopStories(searchTerm);
  };

  //dismiss
  const onDismiss = (id) => {
    const isNotId = function (item) {
      item.objectID !== id;
    };
    const updatedHits = result1.hits.filter(isNotId);

    setResult({ hits: updatedHits, page });
  };

  const page = (result1 && result1.page) || 0;

  // using Effect
  useEffect(() => {
    // when mounting

    return fetchSearchTopStories(searchTerm);

    // dismount
  }, []);

  return (
    <div className="page">
      <div className="interactions">
        <Search
          value={searchTerm}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        >
          Search
        </Search>
      </div>
      <div className="articles">
        {result1 && <Table list={result1.hits} onDismiss={onDismiss} />}
      </div>
      <footer>
        <Button onClick={() => fetchSearchTopStories(searchTerm, page + 1)}>
          More
        </Button>
      </footer>
    </div>
  );
}
