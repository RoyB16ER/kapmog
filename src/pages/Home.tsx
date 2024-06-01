import { Props } from "../models/props";

const Home = ({ movie }: Props) => {
  
    return (
        <>
          <h1>Home Page</h1>
          <div>
            {movie && (
              <div>
                <img src={movie.Poster} alt={movie.Title} />
                <p>Synopsis: {movie.Plot}</p>
                <p>Year(s): {movie.Year}</p>
                <p>IMDB Rating: {movie.imdbRating}</p>
              </div>
            )}
          </div>
        </>
    )
  }

export default Home;