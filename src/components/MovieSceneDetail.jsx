import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieSceneDetail = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return (
      <div>
        <p>La escena que buscas no existe</p>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  return (
    <section>
      <img
        src={selectedMovie.poster}
        alt={selectedMovie.movie}
        title={selectedMovie.movie}
        width="100px"
      />
      <div>
        <h2>{selectedMovie.movie}</h2>
        <p>{selectedMovie.fullLine}</p>
        <p>{selectedMovie.director}</p>
        <a
          href={selectedMovie.audio}
          title="Wow audio"
          target="_blank"
          rel="noreferrer"
        >
          Escuchar "wow"
        </a>
      </div>
      <Link to="/">Volver</Link>
    </section>
  );
};

MovieSceneDetail.propTypes = {
  selectedMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    movie: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    fullLine: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
  }),
};

export default MovieSceneDetail;
