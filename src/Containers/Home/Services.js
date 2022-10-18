import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import CardImage from "../../Assets/Serviceimage1.png";

const LoremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit luctus lectus in facilisis.";

const ServicesCard = ({ title, desc, button }) => {
  return (
    <Flex className="Services-Card">
      <Flex className="Services-Card-Image">
        <Image src={CardImage} alt={title} w="100%" h="100%" />
      </Flex>
      <Flex className="Services-Card-Title">{title}</Flex>
      <Flex className="Services-Card-Desc">{desc}</Flex>
      <Flex className="Services-Card-Button">{button}</Flex>
    </Flex>
  );
};

export default function Services({ type }) {
  return (
    <Flex className="Services-Container">
      <Flex className="Services-Box">
        <Flex className="Services-Title">
          {type === "1" ? "Our Services" : "Meet our Psychologists"}
        </Flex>
        <Flex className="Services-Cards">
          <ServicesCard
            title="De-addiction Therapy"
            desc={LoremIpsum}
            button="Get In Touch"
          />
          <ServicesCard
            title="Mental Therapy"
            desc={LoremIpsum}
            button="Get In Touch"
          />
          <ServicesCard
            title="Mental Therapy"
            desc={LoremIpsum}
            button="Get In Touch"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
