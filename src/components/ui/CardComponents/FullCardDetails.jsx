import { PropTypes } from "prop-types";

function FullCardDetails({ details }) {
const { name, base_experience, sprites, weight, height, abilities, types, forms } = details;

  return (
    <div className="flex justify-center items-center">
        <div className="flex-nowrap shadow-md rounded-3xl p-2 xl:p-8 text-center w-[500px] border border-yellow-300 ">
            {/* DETAILS */}
            <div className="flex mb-2">
                <h2 className="capitalize font-bold text-3xl">{name}</h2>           
            </div>
            <div className="flex justify-start font-bold">
                <span>HP: {base_experience}</span>
            </div>

            {/* IMAGE */}
            <div className="border border-yellow-300 ">
                <div className="flex items-center justify-center"> 
                        <img 
                            src={sprites.other["official-artwork"]["front_default"]}
                            alt={name}
                            className="w-[200px]"    
                        />
                        <span className="p-5 w-[200px]">
                            <p className="font-bold">BASIC INFO: </p>
                            <p>HEIGHT: {height} </p>
                            <p>WEIGHT: {weight} </p>
                        </span>
                </div>
            </div>

            {/* SPRITES */}
            <div className="flex justify-center">
                <img src={sprites.front_default} alt={name} />
                <img src={sprites.back_default} alt={name} />
                <img src={sprites.front_shiny} alt={name} />
                <img src={sprites.back_shiny} alt={name} />
            </div>

            {/* TYPES */}
            <div className="font-bold">TYPES</div>
            {types.map((type) => (
                <div key={`type${type.type.name}`}>{type.type.name}</div>
            ))}
            
            {/* ABILITIES */}
            <div className="font-bold">ABILITIES</div>
            {abilities.map((ability) => (
                <div key={`ability${ability.ability.name}`}>{ability.ability.name}</div>
            ))}

            {/* FORMS */}
            <div className="font-bold">FORMS</div>
            {forms.map((form) => (
                <div key="form">{form.name}</div>
            ))}

        </div>
    </div>
  );
}

FullCardDetails.propTypes = {
    details: PropTypes.object,
};


export default FullCardDetails