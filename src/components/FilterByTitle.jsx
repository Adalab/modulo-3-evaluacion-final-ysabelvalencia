import React from 'react';

const FilterByTitle = ({ titleFilter, handleChangeInput }) => {
  const handleInput = (ev) => {
    handleChangeInput(ev.target.value);
  };

  return (
    <label htmlFor="search-film">
      Título de la película
      <input
        type="text"
        name="search-film"
        value={titleFilter}
        id="search-film"
        onChange={handleInput}
      />
    </label>
  );
};

export default FilterByTitle;
