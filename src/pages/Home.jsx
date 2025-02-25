import {useState, useEffect} from 'react'
import MovieCard from '../componentes/MovieCard'
import './MovieGrid.css'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])
  console.log(topMovies);
  

  const getTopMovies = async (url) =>{
    const reponse = await fetch(url)
    const data =  await reponse.json()
    setTopMovies(data.results)
  }

  useEffect(()=>{
    const topRateUrl = `${moviesUrl}top_rated?${apiKey}`
    getTopMovies(topRateUrl)
  }, [])

  return (
    <div className='wrapper'>
      <div className='container'>
        <h2 className='title'>Melhores Filmes:</h2>
        <div className='container-movies'>
          {topMovies.length === 0 && <p>carregando...</p>}
          {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
      </div>
    </div>
  )
}

export default Home
