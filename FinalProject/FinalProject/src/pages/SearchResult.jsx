// import { useParams } from "react-router";
import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  // const params = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");
  // const query = new URLSearchParams(search);
  // const searchParams = params.searchParams;
  return <div>{query}</div>;
};

export default SearchResult;
