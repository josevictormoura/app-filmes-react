import { Link, useNavigate} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import {useState} from 'react'

import './Navbar.css'

const Navbar = () => {

  const [search, setSearch] = useState("")

  // direcionar o usuario
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <nav id="navbar">
      <h2><Link to="/"> <BiCameraMovie/> App Movies</Link></h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder='Busque um filme' onChange={({target})=> setSearch(target.value)} value={search}/>
          <button type="submit">
            <BiSearchAlt2/>
            Buscar
          </button>
        </div>
      </form>
    </nav>
  )
}

export default Navbar
