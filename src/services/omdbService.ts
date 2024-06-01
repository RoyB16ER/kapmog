import axios from 'axios';
import { Movie, Rating } from '../models/movie';

const getMovie = async (movieTitle: string) : Promise<Movie> => {
  const url = `https://www.omdbapi.com/?apikey=79638ecc&t=${movieTitle}`;
  const response = await axios.get<Movie>(url);
  
  const movieData: Movie = response.data;

  const imdbRating = movieData.Ratings.find((rating: Rating) => rating.Source === 'Internet Movie Database');
  movieData.imdbRating = imdbRating ? imdbRating.Value : '';


  return movieData;
}

export class omdbService {
  public static getMovie = getMovie
}