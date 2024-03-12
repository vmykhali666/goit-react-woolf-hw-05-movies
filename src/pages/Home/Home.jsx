import React, { useState, useEffect } from 'react';
import { moviesAPI } from 'helpers/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = ({ title = "Trending today"}) => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        moviesAPI.getTrendingMovies('week').then(setTrendingMovies);
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <MoviesList movies={trendingMovies} />
        </div>
    );
};

export default Home;
