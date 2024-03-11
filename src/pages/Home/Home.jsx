import React, { useState, useEffect } from 'react';
import { moviesAPI } from 'helpers/moviesAPI';
import { Link, useLocation } from 'react-router-dom';

const Home = ({ title = "Trending today"}) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        moviesAPI.getTrendingMovies('week').then(setTrendingMovies);
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {trendingMovies.map(({ id, title, name }) => (
                    <li key={id}>
                        <Link to={`movies/${id}`} state={{from : location}}>{title ?? name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
