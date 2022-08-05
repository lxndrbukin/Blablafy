import React from 'react';

const Search = ({ className, placeholder }) => {
  return (
    <div className={className}>
      <input placeholder={placeholder} />
      <i className='fas fa-search'></i>
    </div>
  );
};

export default Search;
