import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import BgImage from "../../Assets/HeroBackground.png";
import "./styles.css";

export default function Hero() {
  return (
    <Flex className="Hero-Container" backgroundImage={BgImage}>
      <Flex className="Hero-Box">
        <Flex className="Hero-Title">
          De-Addiction & Mental Therapy Services
        </Flex>
        <Flex className="Hero-Desc">
          Overcoming an addiction alone is not easy but it can be much easier
          when YOU are surrounded by the right professionals!
        </Flex>
        <Box className="Hero-Trusted">
          <Flex className="Hero-Trusted-Text">
            Trusted by 100+ patients across the world
          </Flex>
        </Box>
        <Flex className="Hero-Button">Get In Touch</Flex>
      </Flex>
    </Flex>
  );
}
