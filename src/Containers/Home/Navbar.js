import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import logo from "../../Assets/Logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

import "./styles.css";

export default function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <Flex className="Navbar-Container">
      <Flex className="Navbar-Logo">
        <Image
          h="100%"
          w="100%"
          src={logo}
          alt="Sobriety Rehabilitation Foundation"
        />
      </Flex>
      <Flex
        display={isTabletOrMobile ? "none" : "flex"}
        className="Navbar-Links"
      >
        <Flex className="Navbar-Link">Home</Flex>
        <Flex className="Navbar-Link">About Us</Flex>
        <Flex className="Navbar-Link">Our Services</Flex>
        <Flex className="Navbar-Link">Why Us?</Flex>
        <Flex className="Navbar-Link">Our Team</Flex>
        <Flex className="Navbar-Button">Contact Us</Flex>
      </Flex>
      <Flex marginLeft="auto">
        <HamburgerIcon
          display={isTabletOrMobile ? "initial" : "none"}
          className="Navbar-Hamburger"
        />
      </Flex>
    </Flex>
  );
}
