import mainLogo from '../../assets/react.svg'

function MainNavigation() {
  const handleClick = () => {
    console.log("PENCET NAVBAR")
  };


  return (
    <div className='flex  bg-slate-500 w-full h-20 items-center justify-center px-10 rounded-bl-3xl rounded-br-3xl mb-10'>
      <div className='container mx-0'>
        <div className='flex'>
          <div className="flex justify-start w-1/12">
            <img
              src={mainLogo}
              alt="PokeDex Logo"
              draggable="false"
              className="w-150 h-10 cursor-pointer"
              onClick={handleClick}
            />
          </div>

          <div className='flex items-center w-1/2'>   
            <h1>POKEDEX</h1>
          </div>
        </div>
        
        {/* <div className="flex justify-end w-1/2  ">
          <SearchBar
            placeHolder="Search Pokemon by name or ID"
            onSearch={onSearch}
          />
        </div> */}

      {/* <div className="flex items-center justify-center mx-auto w-full md:hidden ">
        <div className="flex justify-center w-full ">
          <SearchBar placeHolder="Search Pokemon" onSearch={onSearch} />
        </div>
      </div> */}

    </div>
  </div>
  )
}

export default MainNavigation