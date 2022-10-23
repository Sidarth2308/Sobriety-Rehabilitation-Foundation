import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import CardImage from "../../Assets/Serviceimage1.png";
import doctorImage1 from "../../Assets/DoctorImage1.jpeg";
import doctorImage2 from "../../Assets/DoctorImage2.jpeg";

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
const DoctorCard = ({ title, desc, doctorImage }) => {
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

export default function Services({ type, innerRef }) {
  return (
    <Flex className="Services-Container" ref={innerRef}>
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
                desc="Addiction treatment is not one-size-fits-all. Treatments may vary based on your needs. You can choose the treatment that works best for you based on the substance you're abusing, the level of care you need."
                button="Get In Touch"
              />
              <ServicesCard
                title="Mental Therapy"
                desc="We have RCI licensed experienced therapists who provide comprehensive psychotherapies to clients according to their symptoms and mental health issues"
                button="Get In Touch"
              />
              <ServicesCard
                title="Mental Therapy"
                desc="We have RCI licensed experienced therapists who provide comprehensive psychotherapies to clients according to their symptoms and mental health issues"
                button="Get In Touch"
              />
            </>
          ) : (
            <>
              <DoctorCard
                title="Dr. Ramya Thankur"
                desc="Therapist"
                doctorImage={doctorImage1}
              />
              <DoctorCard
                title="Dr. Ramya Thankur"
                desc="Therapist"
                doctorImage={doctorImage1}
              />
              <DoctorCard
                title="Dr. Ramya Thankur"
                desc="Therapist"
                doctorImage={doctorImage2}
              />
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
