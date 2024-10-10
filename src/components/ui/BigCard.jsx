
import { Link } from "react-router-dom"
import { PropTypes } from "prop-types";

function BigCard({pokemons}) {
  return (
    <div>
        <div className="flex justify-center items-center h-20 border-red-500 border-2">
            <h1>POKEMON</h1>
        </div>
        
        <div
            className="border-yellow-500 border-2 flex flex-wrap"
        >
            {pokemons && 
                pokemons.map((pokemon) => (
                        <Link 
                            key={`cardName${pokemon.name}`}
                            to={`/pokemon/${pokemon.name}`} 
                            className="flex justify-center border-blue-400 w-[150px] border-2 m-5 hover:shadow-md hover:shadow-white p-2 rounded-xl capitalize"
                        >
                            {pokemon.name}
                        </Link>
                ))}
        </div>
    </div>
  );
}

BigCard.propTypes = {
    pokemons: PropTypes.array,
};


export default BigCard