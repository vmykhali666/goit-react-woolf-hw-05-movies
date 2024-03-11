import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from 'helpers/moviesAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    moviesAPI.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <div>
          <h2>Reviews</h2>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;