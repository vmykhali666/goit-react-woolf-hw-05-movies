import React from 'react';

export const Cast = ({ cast }) => {
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img src={actor.profile_path} alt={actor.name} />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
