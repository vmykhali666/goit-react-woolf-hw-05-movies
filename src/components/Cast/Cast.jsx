import React, { useEffect, useState } from 'react';
import { moviesAPI } from 'helpers/moviesAPI';
import { useParams } from 'react-router-dom';
import css from 'style/Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesAPI.getCreditsByMovieId(movieId).then(setCast);
  }, [movieId]);

  return (
    cast.length > 0 ? (
        <div>
          <h3>Cast</h3>
          <ul className={css.CastList}>
            {cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                  alt={name}
                  width="100"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>We don't have any information about cast for this movie</p>
      )
    );
};

export default Cast;