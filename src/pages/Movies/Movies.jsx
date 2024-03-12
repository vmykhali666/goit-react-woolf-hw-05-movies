import React, { useState, useEffect } from 'react';
import { moviesAPI } from 'helpers/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
const Movies = ({ title = 'Movies' }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    moviesAPI.searchMovies(searchQuery, 1).then(setMovies);
  }, [searchQuery]);

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <SearchForm onSubmit={setSearchQuery} />
        <MoviesList movies={movies} />
      </div>
    </div>
  );
};

export default Movies;
