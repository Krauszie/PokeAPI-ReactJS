import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../Loader';
import FullCardDetails from './FullCardDetails';

function BigCardDetails() {
    const {pokemonName} = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        async function fetchDetails(){
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await res.json();
            setDetails(data);
        }

        fetchDetails()
    }, [pokemonName])

  return (
    <div className='border-4 p-10 border-red-500 h-full w-full'>
      <div>
        <Link to="/">
          <div className='border-4 w-[200px] text-center border-red-500 rounded-xl'>Back</div>
        </Link>
        {/* <div className='w-1/2'> */}
          {/* <Loader /> */}
          {!details ? <Loader /> : <FullCardDetails details={details} />}
        {/* </div> */}
      </div>
    </div>
  )
}

export default BigCardDetails