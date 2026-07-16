import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Props } from "../models/props";

const Layout = ({movie, setMovie} : Props) => {
  
  return (
    <>
      <div className="navbar-container">
        <Navbar movie={movie} setMovie={setMovie} />
      </div>
      <main>
        <Outlet context={{ movie, setMovie}} />
      </main>
    </>
  )
}

export default Layout;