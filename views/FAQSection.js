import { React, useState } from "react";
import NextLink from "../components/NextLink";
import Section from "../components/Section";

export default function FAQSection({ FAQSectionData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Section title="FAQ">
        <div className="text-white" style={{ width: "100%" }}>
          {FAQSectionData.list.map((ele, index) => (
            <details
              key={index}
              className={`bg-${FAQSectionData.accordionVariant} p-3 am-collapse`}
              onClick={() =>
                expanded === index ? setExpanded() : setExpanded(index)
              }
              style={{ width: "100%" }}
            >
              <summary className="no-marker" id={`panel${index}a-header`}>
                <p className={`${FAQSectionData.accordionTextVariant} m-0`}>
                  {ele.title}
                </p>
              </summary>
              {"link" in ele ? (
                <p className={`${FAQSectionData.accordionTextVariant}`}>
                  {ele.info}{" "}
                  <NextLink href={ele.link.href}> {ele.link.text} </NextLink>.
                </p>
              ) : (
                <p className={`${FAQSectionData.accordionTextVariant}`}>
                  {ele.info}
                </p>
              )}

              {"accordionList" in ele && (
                <ul>
                  {ele.accordionList.map((item, index) => (
                    <li
                      key={index}
                      className={`${FAQSectionData.accordionTextVariant}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
