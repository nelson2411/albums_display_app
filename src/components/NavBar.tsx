import React from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"

export const NavBar = () => {
  return (
    <Navbar isBordered isBlurred className="bg-black text-white">
      <NavbarBrand>
        <Link to="/">
          <p className="text-2xl font-bold">Nelrosales_Dev</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="mx-1">
          <Link to="/contact">
            <p className="text-lg font-bold">Contact me</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="mx-1">
          <Link to="/about">
            <p className="text-lg font-bold">About me</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="mx-1">
          <Link to="/favorites" className="flex items-center gap-2">
            <FaHeart /> <p className="text-lg font-bold">Favorites</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
