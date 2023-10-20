import React from 'react';

const MovieSceneItem = ({ movie }) => {
  return (
    <>
      <a href="#">
        <img
          src={movie.poster}
          alt={movie.movie}
          title={movie.movie}
          width="100px"
        />
        <p>{movie.movie}</p>
        <p>{movie.fullLine}</p>
        <p>{movie.year}</p>
      </a>
    </>
  );
};

export default MovieSceneItem;
