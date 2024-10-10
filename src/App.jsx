import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainNavigation from './components/layouts/MainNavigation'
import BigCard from './components/ui/BigCard'
import BigCardDetails from './components/ui/CardComponents/BigCardDetails'

function App() {

  const [ pokemons, setPokemons ] = useState(null);

  useEffect(() => {
    async function fetchData(){
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await res.json();
      
      setPokemons(data.results);
    }

    fetchData();
  }, [])


  return (
    <>
      <div className='bg-stone-600 w-full min-h-screen'>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<BigCard pokemons={pokemons} />} />
          <Route path="/pokemon/:pokemonName" element={<BigCardDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App
