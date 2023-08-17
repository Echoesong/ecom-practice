// Parts:
// Button to open clothing navigation (Jackets, Boots, Accessories)
// Home button
// Open Cart Button

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
