import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ allMovies }) => {
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
