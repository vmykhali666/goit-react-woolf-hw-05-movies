import React, { useEffect, useState } from 'react';
import { moviesAPI } from 'helpers/moviesAPI';
import { Link, Outlet, useParams } from 'react-router-dom';
import css from 'style/MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    moviesAPI.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div className="movie-details">
      <h2>{movie.title ?? movie.name}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Original Language: {movie.original_language}</p>
      <p>Overview: {movie.overview}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Vote Average: {movie.vote_average}</p>
      <p>Vote Count: {movie.vote_count}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title ?? movie.name}
      />
      <div>
        <h3 className="movie-details__title">Additional information</h3>
        <ul className={css.AddInfo}>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;