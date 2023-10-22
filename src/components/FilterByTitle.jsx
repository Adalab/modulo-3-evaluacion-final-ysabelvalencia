import PropTypes from 'prop-types';

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

FilterByTitle.propTypes = {
  titleFilter: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};

export default FilterByTitle;
