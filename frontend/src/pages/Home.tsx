import React from 'react';
import { Movie } from '../models/movie';
// Import the helper function from your utils folder
import { getSmokingStatusLabel } from '../utils/movieHelpers';

interface HomeProps {
  movie: Movie | null;
  setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
}

const Home = ({ movie }: HomeProps) => {
  return (
    <div className="home-container">
      {movie ? (
        <div className="movie-details">
          {/* Movie Poster */}
          <img src={movie.Poster} alt={movie.Title} />
          
          {/* Movie Title & Year */}
          <h2>{movie.Title} ({movie.Year})</h2>
          
          {/* Movie Plot */}
          <p>{movie.Plot}</p>

          {/* New SQLite Smoking Status Section */}
          <div className="smoking-classification">
            <strong>Smoking Status: </strong>
             <span className={`status-badge ${movie.smokingStatus || 'unknown'}`}>
              {getSmokingStatusLabel(movie.smokingStatus)}
            </span>
          </div>
        </div>
      ) : (
        <p>Search for a movie to get started!</p>
      )}
    </div>
  );
};

export default Home;