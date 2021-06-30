import React from "react";

const SearchBarContainer = ({ setCurrentProductId ,  searchTerm,
  setSearchTerm,setSortBy }) => {
  return (
    <div className="upperBar">
      <button className="SearchButton" onClick={() => setCurrentProductId(null)}>+ Add</button>
      <input className="SearchBar" type="search"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label for="sorted">Sort by</label>

<select className= "sortBy" onChange={(e) => setSortBy(e.target.value)} name="sortBy">
  <option value="creationDate">Recently added</option>
  <option value="name">Name</option>
</select>
    </div>
  );
};

export default SearchBarContainer;
