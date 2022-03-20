import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './search.svg';


import MovieCard from './MovieCard';
const API_URL= 'http://www.omdbapi.com?apikey=4513a657';

// const movie1 = {
//         "Title": "A Beautiful Mind: Creation of the Special Effects",
//         "Year": "2002",
//         "imdbID": "tt0780995",
//         "Type": "movie",
//         "Poster": "N/A"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovie('All');
    }, []);

    return(
        <div className="app">
            <h1><a href=''>MovieMania</a></h1>
            <div className="search">
                <input
                    placeholder='Search for movies'
                    value={searchTerm}

                    onChange={(e) => setSearchTerm(e.target.value)}

                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovie(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) =>(
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;