import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import CardImage from "../../Assets/Serviceimage1.png";
import doctorImage from "../../Assets/doctor.jpg";

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
const DoctorCard = ({ title, desc, button }) => {
  return (
    <Flex className="Doctor-Card">
      <Flex className="Doctor-Card-Image" bgImage={doctorImage}>
        {/* <Image src={doctorImage} alt={title} w="100%" h="100%" /> */}
      </Flex>
      <Flex className="Doctor-Card-Title">{title}</Flex>
      <Flex className="Doctor-Card-Desc">{desc}</Flex>
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
          {type === "1" ? (
            <>
              {" "}
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
            </>
          ) : (
            <>
              <DoctorCard title="Dr. Ramya Thankur" desc="Therapist" />
              <DoctorCard title="Dr. Ramya Thankur" desc="Therapist" />
              <DoctorCard title="Dr. Ramya Thankur" desc="Therapist" />
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
