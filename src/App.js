
import './App.css';
import React, { useState } from 'react'
import MoviesList from './Componet_search_exercice/MoviesList';
import { Data } from './Data';
import AddMovies from './Componet_search_exercice/AddMovies';
import Search from './Componet_search_exercice/Search';
const App = () => {
  //initialiser les donnee a notre data
  const [movie, setMovie] = useState(Data)
//ajout d'une card
  const HandlAdd = (newmovie) => {
    setMovie([...movie, newmovie])
  }
  const [search, setSearch] = useState("");

//serch by rating
   const [searrate,setSearrate ] = useState(0);
   const HandlRate=(newRate)=>{
    setSearrate(newRate);
   }

  //call back function
  const HandlChange = (x) => {
    setSearch(x);

  }
  return (
    <div className="App">
      <Search HandlChange={HandlChange} search={search}  rate={searrate} HandlRate={HandlRate} />
      <MoviesList films={movie.filter((i) => { return i.title.toLowerCase().match(search.toLowerCase().trim())&&i.rating>=searrate ; })} />
      <AddMovies HandlAdd={HandlAdd} />
    </div>
  )
}
export default App