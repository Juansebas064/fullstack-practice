import reactLogo from './assets/react.svg'
import SearchBar from './SearchBar'
import NavbarUser from './NavbarUser'

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 sticky top-0 py-2 px-10 text-white justify-between flex items-center">
        {/* Div que contiene el logo y las opciones */}
        <div className='flex'>
          <img src={reactLogo} alt="" />
          {/* Div con las opciones */}
          <div className="flex ml-10">
            <a href="" className='p-4'>Inicio</a>
            <a href="" className='p-4'>Dashboard</a>
            <a href="" className='p-4'>Calendario</a>
            <a href="" className='p-4'>DevTeam</a>
          </div>
        </div>
        {/* Barra de búsqueda */}
        <div className="flex items-center w-auto">
          <SearchBar />
          <NavbarUser />
        </div>
      </nav>
    </>
  )
}