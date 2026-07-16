import axios from 'axios';
import { Movie, Rating } from '../../models/movie';

// Add live Render backend URL here!
const API_BASE_URL = "https://kapmog-backend.onrender.com";

const getMovie = async (movieTitle: string): Promise<Movie> => {
  // Fetch metadata from the OMDb API
  const omdbUrl = `https://www.omdbapi.com/?apikey=79638ecc&t=${encodeURIComponent(movieTitle)}`;
  const response = await axios.get<Movie>(omdbUrl);
  const movieData: Movie = response.data;
  
  // Parse out the IMDb rating string
  const imdbRating = movieData.Ratings?.find((rating: Rating) => rating.Source === 'Internet Movie Database');
  movieData.imdbRating = imdbRating ? imdbRating.Value : '';

  // Query local Python REST API for the SQLite data
  try {
    const localDbResponse = await axios.get(
      `${API_BASE_URL}/api/movies/status?title=${encodeURIComponent(movieTitle)}`
    );

    // Append the SQLite smoking status to our movie object
    movieData.smokingStatus = localDbResponse.data.smoking_status;
  } catch (error) {
    console.warn("Could not reach live SQLite backend. Defaulting status to 'unknown'.", error);
    movieData.smokingStatus = "unknown";
  }

  return movieData;
}

export class omdbService {
  public static getMovie = getMovie;
}