import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieSceneItem = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.poster}
          alt={movie.movie}
          title={movie.movie}
          width="100px"
        />
        <p>{movie.movie}</p>
        <p>{movie.fullLine}</p>
        <p>{movie.year}</p>
      </Link>
    </>
  );
};

MovieSceneItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    movie: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    fullLine: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieSceneItem;
