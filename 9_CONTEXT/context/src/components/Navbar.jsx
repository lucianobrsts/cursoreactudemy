import { Link, NavLink } from "react-router-dom";

import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/company">Empresa</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
}
