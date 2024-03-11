import React, { useState, useEffect } from 'react';
import { moviesAPI } from 'helpers/moviesAPI';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
export const Movies = ({ title = 'Movies' }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    moviesAPI.searchMovies(searchQuery, 1).then(setMovies);
  }, [searchQuery]);

  const handleSearchSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      {movieId ? (
        <div>
          <Link to={location?.state?.from ?? '/movies'}>Back</Link>
          <Outlet />
        </div>
      ) : (
        <div>
          <h1>{title}</h1>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </form>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.title ?? movie.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
