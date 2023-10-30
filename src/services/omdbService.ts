import axios from 'axios';
import { Movie } from '../models/movie';

const getMovie = async (movieTitle: string) : Promise<Movie> => {
  const url = `https://www.omdbapi.com/?apikey=79638ecc&t=${movieTitle}`;
  const response = await axios.get<Movie>(url);
  return response.data;
}

export class omdbService {
  public static getMovie = getMovie
}