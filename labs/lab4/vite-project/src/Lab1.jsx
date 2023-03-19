import React, { Component } from "react";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";

const Search = ({ value, onChange, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">{children}</button>
    </form>
  );
};

const Table = ({ list, onDismiss }) => (
  <div className="table">
    {list.map((item) => (
      <div key={item.objectID} className="table-row">
        <span style={{ width: "40%" }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: "30%" }}>{item.author}</span>
        <span style={{ width: "10%" }}>{item.num_comments}</span>
        <span style={{ width: "10%" }}>{item.points}</span>
        <span style={{ width: "10%" }}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    ))}
  </div>
);

export default class Lab extends Component {
  state = {
    result: null,
    searchTerm: "React",
  };

  setSearchTopStories = (result) => {
    const { hits, page } = result;

    const oldHits = page !== 0 ? this.state.result.hits : [];

    const updatedHits = [...oldHits, ...hits];

    this.setState({
      result: { hits: updatedHits, page },
    });
  };

  fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`
    )
      .then((response) => response.json())
      .then((result) => this.setSearchTopStories(result))
      .catch((err) => err);
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onSearchSubmit = (event) => {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  };

  onDismiss = (id) => {
    const isNotId = (item) => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    this.setState({
      result: { ...this.state.result, hits: updatedHits },
    });
  };

  render() {
    const { searchTerm, result } = this.state;
    const page = (result && result.page) || 0;
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        <div className="articles">
          {result && <Table list={result.hits} onDismiss={this.onDismiss} />}
        </div>
        <footer>
          <Button
            onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
          >
            More
          </Button>
        </footer>
      </div>
    );
  }
}
