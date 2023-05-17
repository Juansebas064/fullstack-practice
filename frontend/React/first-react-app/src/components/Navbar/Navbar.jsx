import reactLogo from "/src/assets/react.svg";
import "./Navbar.css"

// Navbar
function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="" width="50px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar