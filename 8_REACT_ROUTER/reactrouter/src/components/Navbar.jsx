import { Link } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/product">Produto</Link>
        </nav>
    )
}

export default Navbar