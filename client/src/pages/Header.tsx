import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="bg-gray-600">
      <ul className="text-white">
        <li>
          <Link to="/homepage">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
