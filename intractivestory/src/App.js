import React from 'react';

import './App.css';

import panda from './img/panda.jpg';

import tiger from './img/tiger.jpg';





const movies = [

  {

    id: 1,

    title: 'panda life story',

    description: 'This is the first movie.',

    thumbnail: panda,

  },

  {

    id: 2,

    title: 'Adventure of Tiger',

    description: 'This is the second movie.',

    thumbnail: tiger,

  },

  // Add more movies here

];




const Movie = ({ movie }) => {

  return (

    <button onClick={handleSubmit}>

    <div className="movie">

      <h3 className="title">{movie.title}</h3>

      <img className="thumbnail" src={movie.thumbnail} alt={movie.title} />    

      <p className="description">{movie.description}</p>

    </div>

    </button>

  );

};




const handleSubmit = () => {

  console.log("cliked");

}





const App = () => {

  return (

    <div className="App">

      <h1>Stories Thumbnails</h1>

     

      <div className="movie-list">

     
//comment
        {movies.map(movie => (

          <Movie key={movie.id} movie={movie} />

        ))}

     

      </div>

     

    </div>

  );

};




export default App;

