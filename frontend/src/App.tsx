import { useState } from 'react';
import './App.css'
import SearchBox from './components/searchBox/SearchBox'
import { Movie } from './models/movie';
//Additional imports
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout movie={movie} setMovie={setMovie} />}>
            <Route path="/" element={<Home movie={movie} setMovie={setMovie} />}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;