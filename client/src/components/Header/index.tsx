import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="bg-gray-600">
      <ul className="text-white flex">
        <li className="mr-2">
          <Link to="/homepage">Home</Link>
        </li>
        <li>
          <Link to="/test">Login/Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
