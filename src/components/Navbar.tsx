import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'
import SearchBox from "./searchBox/SearchBox";


const Navbar = ({movie, setMovie} : any) => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  }
  
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <button onClick={handleHomeClick} >Home</button>
        </Link>
        <Link to="/About">
          <button>About</button>
        </Link>
        <Link to="/Contact">
          <button>Contact</button>
        </Link>
        <SearchBox movie={movie} setMovie={setMovie} />
      </div>
    </>
  );
};

export default Navbar;