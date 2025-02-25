import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../componentes/MovieCard'
import "../pages/MovieGrid.css"

const Search = () => {

  const searchURL = import.meta.env.VITE_SEARCH
  const apiKey = import.meta.env.VITE_API_KEY

  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  //pegar o valor de que na URL
  const query = searchParams.get('q')

   const getSearchMovie = async (url) =>{
      const reponse = await fetch(url)
      const data =  await reponse.json()
      setMovies(data.results)
    }
  
    useEffect(()=>{
      const searchMovieWithURL = `${searchURL}?${apiKey}&query=${query}`
      getSearchMovie(searchMovieWithURL)
    }, [query])


  return (
    <div className='wrapper'>
      <div className='container'>
        <h2 className='title'>Resultados para: <span className='query-text'>{query}</span></h2>

        <div className='container-movies'>
          {movies.length === 0 && <p>carregando...</p>}
          {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
      </div>
  </div>
  )
}

export default Search
