import React, { useState, useEffect } from 'react';
import { moviesAPI } from 'helpers/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';

const Movies = ({ title = 'Movies' }) => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('search');
    query && moviesAPI.searchMovies(query, 1).then(setMovies);
  }, [searchParams]);

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <SearchForm />
        <MoviesList movies={movies} />
      </div>
    </div>
  );
};

export default Movies;
