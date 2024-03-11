import React, { useState, useEffect } from 'react';
import { moviesAPI } from 'helpers/moviesAPI';
import { Link } from 'react-router-dom';

export const Home = ({ title = "Trending today"}) => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        moviesAPI.getTrendingMovies('week').then(setTrendingMovies);
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {trendingMovies.map(({ id, title, name }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title ?? name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
