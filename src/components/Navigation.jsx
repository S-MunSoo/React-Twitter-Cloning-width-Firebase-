import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Hoem</NavLink>
        </li>
        <li>
          <NavLink to="/profile">profile</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
