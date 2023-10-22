import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ filteredMovies, titleFilter, yearFilter }) => {
  if (filteredMovies.length === 0) {
    if (titleFilter !== '' && yearFilter === '') {
      return (
        <section>
          <p>
            No hay coincidencias entre la palabra "{titleFilter}" y el año
            seleccionado.
          </p>
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

export default MovieSceneList;
