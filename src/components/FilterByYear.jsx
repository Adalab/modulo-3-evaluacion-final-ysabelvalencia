import React from 'react';

const FilterByYear = ({ yearFilter, handleChangeSelect, years }) => {
  const handleSelect = (ev) => {
    handleChangeSelect(ev.target.value);
  };

  const renderYearOptions = () => {
    const sortedYears = years.slice().sort((a, b) => b - a);

    return sortedYears.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };

  return (
    <>
      <label htmlFor="search-year">
        Año de la película
        <select
          name="search-year"
          id="search-year"
          value={yearFilter}
          onChange={handleSelect}
        >
          <option value="">Todos</option>
          {renderYearOptions()}
        </select>
      </label>
    </>
  );
};

export default FilterByYear;
