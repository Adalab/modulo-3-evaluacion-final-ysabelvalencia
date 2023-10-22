import React from 'react';
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

export default MovieSceneItem;
