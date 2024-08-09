import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => (
  <div className="mb-4 text-center">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search"
      className="p-2 border border-gray-300 rounded"
    />
  </div>
);

export default Search;
