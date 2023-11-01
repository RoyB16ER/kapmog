import { useRef } from 'react';
import './SearchBox.css'
import { omdbService } from '../../services/omdbService';
import { Movie } from '../../models/movie';

interface Props {
  movie: Movie | null;
  setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
}

const SearchBox = ({movie, setMovie} : Props) => {
  const searchBoxInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const searchBoxInput = searchBoxInputRef.current;
    if (searchBoxInput == null || searchBoxInput == undefined) {
      return;
    }

    const movieTitle = searchBoxInput.value;

    const movieResult = await omdbService.getMovie(movieTitle);

    setMovie(movieResult);
    console.log(movieResult);
  }

  return (
    <>
      <input ref={searchBoxInputRef} id="searchBox" type="text" placeholder='Movie Title' />
      <button type="submit" onClick={handleSubmit}>Submit form</button>
      
      <p>
        {movie?.Year}
      </p>
    </>
  )
}

export default SearchBox