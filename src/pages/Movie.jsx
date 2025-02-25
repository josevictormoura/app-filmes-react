import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from '../componentes/MovieCard'

import './Movie.css'

const Movie = () => {

  const moviesUrl = import.meta.env.VITE_API
  const apiKey = import.meta.env.VITE_API_KEY
  const {id} = useParams()
  console.log(id);
  const [movie, setMovie] = useState(null)
  const [carregando, setCarregando] = useState(true)

  const getMovie = async (url) =>{
    try {
      // Simula um delay de 2 segundos para o loading
      const response = await fetch(url);
      const data = await response.json()
      setMovie(data)
    } catch (error) {
      console.log('Erro ao buscar o filme:', error)
    }finally{
      setCarregando(false)
    }
  }

  useEffect(()=>{
    const movieURL = `${moviesUrl}${id}?${apiKey}`
    getMovie(movieURL)
  }, [])

  function formatCurrency(valor) {
    return valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  }

  if (carregando) {
    return <div className='loader'>carregando </div>
  }

  return (
    <div className='movie-page'>
     <div>
        {movie && <MovieCard movie={movie}/>}
        {movie && (
        <div>
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3><BsWallet2/> Orcamento</h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3><BsGraphUp/> Receita</h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3><BsHourglassSplit/> Duracao</h3>
            <p>{movie.runtime}</p>
          </div>
          <div className="info description">
            <h3><BsFillFileEarmarkTextFill/> Descricao</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Movie