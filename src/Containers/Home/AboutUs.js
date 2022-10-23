import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import AboutImage from "../../Assets/AboutSectionimage.png";

export default function AboutUs({ innerRef }) {
  return (
    <Flex className="About-Container" ref={innerRef}>
      <Flex className="About-Box">
        <Flex className="About-Image">
          <Image src={AboutImage} w="100%" h="100%" alt="About Us" />
        </Flex>
        <Flex className="About-TextContainer">
          <Flex className="About-Title">About Us</Flex>
          <Flex className="About-Desc">
            Sobriety Rehabilitation Foundation is an alcohol and drug
            deaddiction centre where residents are provided constant care and
            support by our highly-trained staff. We offer comprehensive & Client
            oriented programs for people suffering from substance dependence and
            substance abuse or any other mental health conditions
          </Flex>
          <Flex className="About-Button">Get In Touch</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
