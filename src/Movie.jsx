import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import './Movies.css'

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f73387df";
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Marvel");
  }, []);

  return (
    <>
     <div className="searchBox">
     <input className="searchInput"type="text" name="" placeholder="Search" value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)}></input>
    <button className="searchButton" onClick={() => searchMovies(searchTerm)}>
    <i className="material-icons">
        search
    </i>
    </button>
    </div>
    {
        movies?.length > 0 ? 
        <div style={{display:"flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center'}}>
        {movies.map((movie) => (
          <MovieCard
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            poster={movie.Poster}
          />
        ))}
      </div>
     : <h1 className="nomovies">No movies Found</h1>
    }
        
    </>
  );
};

export default Movie;
