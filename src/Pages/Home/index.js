import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  AboutSection,
  ContactSection,
  FAQsSection,
  HeroSection,
  Navbar,
  ServicesSection,
  WhyUsSection
} from "../../Containers/Home";
import { useRef } from "react";
export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef1 = useRef(null);
  const whyRef = useRef(null);
  const servicesRef2 = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex direction="column">
      <Navbar
        scrollClick={handleClick}
        refs={[
          heroRef,
          aboutRef,
          servicesRef1,
          whyRef,
          servicesRef2,
          faqRef,
          contactRef
        ]}
      />
      <HeroSection innerRef={heroRef} />
      <Flex direction="column" bgColor="#ffffff">
        <AboutSection innerRef={aboutRef} />
        <ServicesSection type="1" innerRef={servicesRef1} />
        <WhyUsSection innerRef={whyRef} />
        <ServicesSection type="2" innerRef={servicesRef2} />
        <FAQsSection innerRef={faqRef} />
      </Flex>
      <ContactSection innerRef={contactRef} />
    </Flex>
  );
}
