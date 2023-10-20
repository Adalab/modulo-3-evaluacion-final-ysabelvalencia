import React from 'react';

const FilterByYear = () => {
  return (
    <label htmlFor="search-year">
      Año de la película
      <select
        name="search-year"
        // id=""
        // value={}
        // onChange={}
      >
        <option
        // selected
        // value=""
        >
          Todos
        </option>
      </select>
    </label>
  );
};

export default FilterByYear;
