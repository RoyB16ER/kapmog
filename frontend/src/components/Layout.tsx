import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Props } from "../models/props";
import { Movie } from "../models/movie";


const Layout = ({movie, setMovie} : Props) => {
  
  return (
    <>
      <div className="navbar-container">
        <Navbar movie={movie} setMovie={setMovie} />
      </div>
      <main>
        <Outlet movie={movie} setMovie={setMovie} />
      </main>      
    </>
  )
}

export default Layout;