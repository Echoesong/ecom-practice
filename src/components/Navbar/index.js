// Parts:
// Button to open clothing navigation (Jackets, Boots, Accessories)
// Home button
// Open Cart Button

import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Navbar(props) {
  return (
    <nav className="flex-row">
      <div>
        <Menu />
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
