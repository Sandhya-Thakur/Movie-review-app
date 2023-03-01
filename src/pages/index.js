import React from "react";
import { useState } from 'react';
export default function Home() {
  const [movies, setMovies] = useState([]);
  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'c116ae6c47msh72b6f9c934b6962p1dbfbdjsn8a1b4f8eaaba',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  setMovies(response.data);
}).catch(function (error) {
	console.error(error);
});
return (
    <div class = "body">
      <div class = "header">
        <h1>Top 100 Movies</h1>
      </div>
      <div class = "content1">
        <form >
          <input type = "text" placeholder = "Search for a movie" />
        </form>
        <button type = "submit">Search</button>
      </div>
        <ul>
          {movies.map((movie) => (
            <li key={id}>{movieNamesById[id]}
            <p>{movie.thumbnail}</p>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.rating}</p>
            <p>{movie.votes}</p>
            <p>{movie.rank}</p>
            <p>{movie.id}</p>
            


            </li>
          ))}
        </ul>
    </div>


              
      

      

        


      


     

        

      
                
   



  




      

    


    
  );
}
