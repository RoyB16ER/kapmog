import { useState } from 'react';
import './App.css'
import MovieDetails from './components/MovieDetails'
import SearchBox from './components/searchBox/SearchBox'
import { Movie } from './models/movie';

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);

  return (
    <>
      <SearchBox movie={movie} setMovie={setMovie} />
      <MovieDetails />
    </>
  )
}

export default App
