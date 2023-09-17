import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <li className=" text-sm font-semibold text-gray-800 hover:text-gray-900">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `${isActive ? "text-green-500" : ""}`;
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="text-sm font-semibold text-gray-800 hover:text-gray-900">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return `${isActive ? "text-green-500" : ""}`;
              }}
            >
              About
            </NavLink>
          </li>
          <li className="text-sm font-semibold text-gray-800 hover:text-gray-900">
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return `${isActive ? "text-green-500" : ""}`;
              }}
            >
              contact
            </NavLink>
          </li>
          <li className="text-sm font-semibold text-gray-800 hover:text-gray-900">
            <NavLink
              to="/github"
              className={({ isActive }) => {
                return `${isActive ? "text-green-500" : ""}`;
              }}
            >
              github
            </NavLink>
          </li>
    </>
  )
}

export default Nav
