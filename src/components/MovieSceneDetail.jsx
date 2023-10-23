import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/layout/MovieSceneDetail.scss';

const MovieSceneDetail = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return (
      <div className="sectionD-error">
        <p className="sectionD-error__message">
          La escena que buscas no existe.
        </p>
        <Link className="sectionD-error__return" to="/">
          <i class="sectionD-error__return--home fa-solid fa-house home"></i>
        </Link>
      </div>
    );
  }

  return (
    <section className="sectionD">
      <div className="section-detail">
        <img
          className="section-detail__image"
          src={selectedMovie.poster}
          alt={selectedMovie.movie}
          title={selectedMovie.movie}
        />
        <div className="section-detail__box">
          <h2 className="section-detail__box--title">{selectedMovie.movie}</h2>
          <p className="section-detail__box--line">
            «{selectedMovie.fullLine}»
          </p>
          <p className="section-detail__box--director">
            <i class="fa-solid fa-film"></i> {selectedMovie.director}
          </p>
          <a
            className="section-detail__box--audio"
            href={selectedMovie.audio}
            title="Wow audio"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-circle-play"></i> Escuchar escena
          </a>
        </div>
        <Link className="section-detail__return" to="/">
          <i class="fa-solid fa-house home"></i>
        </Link>
      </div>
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
