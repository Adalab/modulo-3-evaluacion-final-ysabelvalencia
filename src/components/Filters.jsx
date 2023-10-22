import FilterByYear from './FilterByYear';
import FilterByTitle from './FilterByTitle';
import PropTypes from 'prop-types';
import '../styles/layout/Filters.scss';

const Filters = ({
  titleFilter,
  handleChangeInput,
  yearFilter,
  handleChangeSelect,
  years,
  handleResetButton,
}) => {
  const handleReset = (ev) => {
    handleResetButton('');
  };

  return (
    <form className="form" onSubmit={(ev) => ev.preventDefault()}>
      <FilterByTitle
        titleFilter={titleFilter}
        handleChangeInput={handleChangeInput}
      />

      <FilterByYear
        yearFilter={yearFilter}
        handleChangeSelect={handleChangeSelect}
        years={years}
      />

      <button className="form__button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

Filters.propTypes = {
  titleFilter: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  yearFilter: PropTypes.string.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
  years: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleResetButton: PropTypes.func.isRequired,
};

export default Filters;
