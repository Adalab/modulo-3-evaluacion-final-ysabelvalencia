import PropTypes from 'prop-types';
import '../styles/layout/FilterByYear.scss';

const FilterByYear = ({ yearFilter, handleChangeSelect, years }) => {
  const handleSelect = (ev) => {
    handleChangeSelect(ev.target.value);
  };

  const renderYearOptions = () => {
    const sortedYears = years.slice().sort((a, b) => b - a);

    return sortedYears.map((year, index) => (
      <option className="search-year__select--option" key={index} value={year}>
        {year}
      </option>
    ));
  };

  return (
    <>
      <label className="search-year" htmlFor="search-year">
        Año de la película
        <select
          className="search-year__select"
          name="search-year"
          id="search-year"
          value={yearFilter}
          onChange={handleSelect}
        >
          <option className="search-year__select--option" value="">
            Todos
          </option>
          {renderYearOptions()}
        </select>
      </label>
    </>
  );
};

FilterByYear.propTypes = {
  yearFilter: PropTypes.string.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
  years: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FilterByYear;
