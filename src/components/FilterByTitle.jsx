import PropTypes from 'prop-types';
import '../styles/layout/FilterByTitle.scss';

const FilterByTitle = ({ titleFilter, handleChangeInput }) => {
  const handleInput = (ev) => {
    handleChangeInput(ev.target.value);
  };

  return (
    <label className="search-film" htmlFor="search-film">
      Título de la película
      <input
        className="search-film__input"
        type="text"
        name="search-film"
        value={titleFilter}
        id="search-film"
        placeholder="Ej: Cars"
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
