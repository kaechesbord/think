import React from "react";
import '../App.css'
const Search = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
        <form className="d-flex justify-content-center">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary my-2 mx-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Search;
