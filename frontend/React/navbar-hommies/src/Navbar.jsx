import reactLogo from './assets/react.svg'

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 sticky flex items-center">
        <img src={reactLogo} alt="" />
        <div className="flex">
          <a href="">Inicio</a>
          <a href="">Dashboard</a>
          <a href="">Calendario</a>
          <a href="">DevTeam</a>
        </div>
      </nav>
    </>
  )
}