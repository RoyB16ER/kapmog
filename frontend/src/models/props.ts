import { Movie } from "./movie";

export interface Props {
    movie: Movie | null;
    setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
}