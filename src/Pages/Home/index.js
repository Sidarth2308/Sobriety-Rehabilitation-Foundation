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
export default function Home() {
  return (
    <Flex direction="column">
      <Navbar />
      <HeroSection />
      <Flex direction="column" bgColor="#ffffff">
        <AboutSection />
        <ServicesSection type="1" />
        <WhyUsSection />
        <ServicesSection type="2" />
        <FAQsSection />
      </Flex>
      <ContactSection />
    </Flex>
  );
}
