import React from 'react'
import { Link } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import '../pages/MovieGrid.css'

const MovieCard = ({movie, showLink = true}) => {

  const imgUrl = import.meta.env.VITE_IMG

  return (
    <div className='movie-card'>
      <div className='card-img'>
        <img src={imgUrl + movie.poster_path}/>
      </div>
      <div className='card-info'>
        <h2>{movie.title}</h2>
        <p>
          <FaStar className='star'/>{movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    </div>
  )
}

export default MovieCard
