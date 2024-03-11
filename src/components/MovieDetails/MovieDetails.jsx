import React from 'react';

export const MovieDetails = ({movie}) => {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Original Language: {movie.original_language}</p>
      <p>Overview: {movie.overview}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Vote Average: {movie.vote_average}</p>
      <p>Vote Count: {movie.vote_count}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};
