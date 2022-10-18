import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import AboutImage from "../../Assets/AboutSectionimage.png";

export default function AboutUs() {
  return (
    <Flex className="About-Container">
      <Flex className="About-Box">
        <Flex className="About-Image">
          <Image src={AboutImage} w="100%" h="100%" alt="About Us" />
        </Flex>
        <Flex className="About-TextContainer">
          <Flex className="About-Title">About Us</Flex>
          <Flex className="About-Desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            blandit luctus lectus in facilisis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Morbi ornare erat a feugiat facilisis. Etiam vulputate dui ut neque
            scelerisque, id placerat sem gravida. Duis id eros sed tortor
            bibendum
          </Flex>
          <Flex className="About-Button">Get In Touch</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
