import axios from 'axios';
import { Movie, Rating } from '../models/movie';

const getMovie = async (movieTitle: string): Promise<Movie> => {
  // 1. Fetch metadata from the OMDb API
  const omdbUrl = `https://www.omdbapi.com/?apikey=79638ecc&t=${encodeURIComponent(movieTitle)}`;
  const response = await axios.get<Movie>(omdbUrl);
  const movieData: Movie = response.data;
  
  // Parse out the IMDb rating string
  const imdbRating = movieData.Ratings.find((rating: Rating) => rating.Source === 'Internet Movie Database');
  movieData.imdbRating = imdbRating ? imdbRating.Value : '';

  // 2. Query your local Python REST API for the SQLite data
  try {
    const localDbResponse = await axios.get(
      `http://127.0.0.1:8000/api/movies/status?title=${encodeURIComponent(movieTitle)}`
    );
    // Append the SQLite smoking status to our movie object
    movieData.smokingStatus = localDbResponse.data.smoking_status;
  } catch (error) {
    console.warn("Could not reach Python SQLite backend. Defaulting status to 'unknown'.", error);
    movieData.smokingStatus = "unknown";
  }

  return movieData;
}

export class omdbService {
  public static getMovie = getMovie;
}