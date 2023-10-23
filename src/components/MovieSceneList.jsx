import MovieSceneItem from './MovieSceneItem';
import PropTypes from 'prop-types';
import '../styles/layout/MovieSceneList.scss';

const MovieSceneList = ({ filteredMovies, titleFilter, yearFilter }) => {
  if (filteredMovies.length === 0) {
    if (titleFilter !== '' && yearFilter === '') {
      return (
        <section className="section-error">
          <p className="section-error__message">
            No hay ningun nombre de película que coincida con la palabra "
            {titleFilter}".
          </p>
        </section>
      );
    } else {
      return (
        <section className="section-error">
          <p className="section-error__message">
            No hay ningun nombre de película que coincida con la palabra "
            {titleFilter}" y el año seleccionado.
          </p>
        </section>
      );
    }
  }

  const renderAllMovies = filteredMovies.map((movie) => {
    return (
      <li className="section-all__list" key={movie.id}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });

  return (
    <section className="section">
      <ul className="section-all">{renderAllMovies}</ul>
    </section>
  );
};

MovieSceneList.propTypes = {
  filteredMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  titleFilter: PropTypes.string.isRequired,
  yearFilter: PropTypes.string.isRequired,
};

export default MovieSceneList;
