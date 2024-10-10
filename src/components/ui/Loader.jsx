import { SiPokemon } from "react-icons/si"

function Loader() {
  return (
    <div
        className="flex items-center justify-center animate-bounce text-yellow-300"
    >
        <SiPokemon size={200} />
    </div>
  )
}

export default Loader