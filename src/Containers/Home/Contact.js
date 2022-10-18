import { Flex, Image, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import logo from "../../Assets/Logo.png";
import twitter from "../../Assets/twitter.png";
import instagram from "../../Assets/instagram.png";
import linkedIn from "../../Assets/linkedin.png";
import facebook from "../../Assets/facebook.png";
import { useMediaQuery } from "react-responsive";

export default function Contact() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <Flex className="Contact-Container">
      <Flex className="Contact-Box">
        <Flex className="Contact-Secondary">
          <Flex className="Contact-Left">
            <Flex
              display={isTabletOrMobile ? "none" : "flex"}
              className="Contact-Left-Title"
            >
              Contact Us
            </Flex>
            <Flex className="Contact-Left-Desc">
              We are here for you, let's get rid of the addiction & Mental
              Health
            </Flex>
            <Flex className="Contact-Left-Image">
              <Image
                src={logo}
                alt="Sobriety Rehabilitation Foundation"
                w="100%"
                h="100%"
              />
            </Flex>
            <Flex className="Contact-Left-Links">
              <Image
                className="Contact-Left-Link"
                src={linkedIn}
                alt="LinkedIn"
              />
              <Image
                className="Contact-Left-Link"
                src={twitter}
                alt="Twitter"
              />
              <Image
                className="Contact-Left-Link"
                src={instagram}
                alt="Instagram"
              />
              <Image
                className="Contact-Left-Link"
                src={facebook}
                alt="Facebook"
              />
            </Flex>
          </Flex>

          <Flex className="Contact-Right">
            <Flex className="Contact-Right-Top">
              <Flex className="Contact-Input-Container">
                <Flex className="Contact-Input-Label">Name *</Flex>
                <Flex className="Contact-Input" minW="50px">
                  <Input type="text" w="95%" focusBorderColor="white" />
                </Flex>
              </Flex>

              <Flex className="Contact-Input-Container">
                <Flex className="Contact-Input-Label">Phone Number *</Flex>
                <Flex className="Contact-Input">
                  <Input type="text" focusBorderColor="white" />
                </Flex>
              </Flex>
            </Flex>
            <Flex className="Contact-Input-Container">
              <Flex className="Contact-Input-Label">Email</Flex>
              <Flex className="Contact-Input">
                <Input type="email" focusBorderColor="white" />
              </Flex>
            </Flex>
            <Flex className="Contact-Input-Container">
              <Flex className="Contact-Input-Label">Message</Flex>
              <Flex className="Contact-Input">
                <Textarea
                  className="Contact-Input-TextArea"
                  resize="none"
                  rows="5"
                  focusBorderColor="white"
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            display={isTabletOrMobile ? "flex" : "none"}
            className="Contact-Left-Title"
          >
            Contact Us
          </Flex>
        </Flex>
        <Flex className="Contact-Footer">
          Copyright © 2022-2025 SOBRIETY REHABILITATION FOUNDATION All Rights
          Reserved.
        </Flex>
      </Flex>
    </Flex>
  );
}
