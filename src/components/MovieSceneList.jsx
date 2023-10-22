import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ allMovies, titleFilter }) => {
  if (allMovies.length === 0) {
    return (
      <li>
        <p>
          No hay ningun nombre de película que coincida con la palabra "
          {titleFilter}".
        </p>
      </li>
    );
  }

  const renderAllMovies = allMovies.map((movie) => {
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
