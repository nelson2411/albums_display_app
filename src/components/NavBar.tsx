import React from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react"

export const NavBar = () => {
  return (
    <Navbar isBordered isBlurred className="bg-black text-white">
      <NavbarBrand>
        <p className="text-2xl font-bold">Nelrosales_Dev</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="">
            <p className="text-lg font-bold">About the project</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="">
            <p className="text-lg font-bold">Contact me</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
