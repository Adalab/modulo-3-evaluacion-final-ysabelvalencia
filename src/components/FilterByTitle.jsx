import React from 'react';

const FilterByTitle = () => {
  return (
    <label htmlFor="search-film">
      Título de la película
      <input
        type="text"
        name="search-film"
        // value=""
        // id=""
        // onChange={}
      />
    </label>
  );
};

export default FilterByTitle;
