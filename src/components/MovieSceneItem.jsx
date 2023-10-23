import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/layout/MovieSceneItem.scss';

const MovieSceneItem = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`} className="scene-item">
        <img
          className="scene-item__image"
          src={movie.poster}
          alt={movie.movie}
          title={movie.movie}
        />
        <h2 className="scene-item__title">{movie.movie}</h2>
        <p className="scene-item__line">«{movie.fullLine}»</p>
        <p className="scene-item__year">{movie.year}</p>
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
