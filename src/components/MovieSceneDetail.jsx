import { Link } from 'react-router-dom';

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

export default MovieSceneDetail;
