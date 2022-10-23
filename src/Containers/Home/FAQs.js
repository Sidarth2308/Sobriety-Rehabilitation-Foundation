import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import "./styles.css";
const FAQS = [
  {
    id: 0,
    question: "Lorem Ipsum is simply dummy text of printing ?",
    answer:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, where an unknown printer took a galley"
  },
  {
    id: 1,
    question: "Lorem Ipsum is simply dummy text of printing ?",
    answer:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, where an unknown printer took a galley"
  },
  {
    id: 2,
    question: "Lorem Ipsum is simply dummy text of printing ?",
    answer:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, where an unknown printer took a galley"
  },
  {
    id: 3,
    question: "Lorem Ipsum is simply dummy text of printing ?",
    answer:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, where an unknown printer took a galley"
  },
  {
    id: 4,
    question: "Lorem Ipsum is simply dummy text of printing ?",
    answer:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, where an unknown printer took a galley"
  },
  {
    id: 5,
    question: "Lorem Ipsum is simply dummy text of printing ?",
    answer:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, where an unknown printer took a galley"
  }
];

export default function FAQs({ innerRef }) {
  const [FAQOpen, setFAQOpen] = useState(0);
  return (
    <Flex className="FAQ-Container" ref={innerRef}>
      <Flex className="FAQ-Title">FAQs</Flex>
      <Flex className="FAQ-Box">
        <Flex className="FAQ-Left">
          {FAQS.filter((FAQ) => FAQ.id < FAQS.length / 2).map((FAQ) => {
            return (
              <Flex className="FAQ-FAQContainer" key={FAQ.id}>
                <Flex className="FAQ-FAQQuestion">
                  <Flex className="FAQ-FAQQuestionText">{FAQ.question}</Flex>
                  <Flex
                    className="FAQ-FAQQuestionClick"
                    onClick={() => {
                      setFAQOpen(FAQ.id);
                    }}
                  >
                    {FAQOpen === FAQ.id ? "-" : "+"}
                  </Flex>
                </Flex>

                {FAQOpen === FAQ.id && (
                  <Flex className="FAQ-FAQAnswer">{FAQ.answer}</Flex>
                )}
              </Flex>
            );
          })}
        </Flex>
        <Flex className="FAQ-Right">
          {FAQS.filter((FAQ) => FAQ.id >= FAQS.length / 2).map((FAQ) => {
            return (
              <Flex className="FAQ-FAQContainer" key={FAQ.id}>
                <Flex className="FAQ-FAQQuestion">
                  <Flex className="FAQ-FAQQuestionText">{FAQ.question}</Flex>
                  <Flex
                    className="FAQ-FAQQuestionClick"
                    onClick={() => {
                      setFAQOpen(FAQ.id);
                    }}
                  >
                    {FAQOpen === FAQ.id ? "-" : "+"}
                  </Flex>
                </Flex>
                {FAQOpen === FAQ.id && (
                  <Flex className="FAQ-FAQAnswer">{FAQ.answer}</Flex>
                )}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
