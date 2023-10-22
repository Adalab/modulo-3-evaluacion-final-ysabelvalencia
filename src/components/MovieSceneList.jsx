import MovieSceneItem from './MovieSceneItem';
import PropTypes from 'prop-types';

const MovieSceneList = ({ filteredMovies, titleFilter, yearFilter }) => {
  if (filteredMovies.length === 0) {
    if (titleFilter !== '' && yearFilter === '') {
      return (
        <section>
          <p>No hay coincidencias entre la palabra "{titleFilter}".</p>
        </section>
      );
    } else {
      return (
        <section>
          <p>
            No hay ninguna película que coincida con la palabra "{titleFilter}"
            y el año seleccionado.
          </p>
        </section>
      );
    }
  }

  const renderAllMovies = filteredMovies.map((movie) => {
    return (
      <li key={movie.id}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });

  return (
    <section>
      <ul>{renderAllMovies}</ul>
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
