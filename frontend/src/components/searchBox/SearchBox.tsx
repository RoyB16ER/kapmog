import { useRef } from 'react';
import './SearchBox.css'
import { omdbService } from '../../services/omdbService';
import { Props } from '../../models/props';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({movie, setMovie} : Props) => {
  const searchBoxInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const searchBoxInput = searchBoxInputRef.current;
    if (searchBoxInput == null || searchBoxInput == undefined) {
      return;
    }

    const movieTitle = searchBoxInput.value;

    const movieResult = await omdbService.getMovie(movieTitle);

    setMovie(movieResult);
    console.log(movieResult);

    navigate('/');
  }

  return (
    <>
      <input ref={searchBoxInputRef} id="searchBox" type="text" placeholder='Movie Title' />
      <button type="submit" onClick={handleSubmit}>Search</button>
    </>
  )
}

export default SearchBox;