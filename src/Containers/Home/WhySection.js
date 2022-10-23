import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import WhyImage from "../../Assets/whychoose.png";
import "./styles.css";
import { useMediaQuery } from "react-responsive";

export default function WhySection({ innerRef }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <Flex className="Why-Container" ref={innerRef}>
      <Flex className="Why-Box">
        {!isTabletOrMobile && (
          <Flex className="Why-Image">
            <Image src={WhyImage} alt="Why Choose Us" w="100%" h="100%" />
          </Flex>
        )}
        <Flex className="Why-Text-Container">
          <Flex className="Why-Text-Title">Why Choose Our Services ?</Flex>
          <Flex className="Why-Text-Cards">
            <Flex className="Why-Text-Card">Fewer Drug Cravings</Flex>
            <Flex className="Why-Text-Card">Improved Relationships</Flex>
            <Flex className="Why-Text-Card">Physical Fitness</Flex>
            <Flex className="Why-Text-Card">Career Growth</Flex>
          </Flex>
          <Flex className="Why-Text-Button">Get In Touch</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
