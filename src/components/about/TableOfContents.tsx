"use client";

import React, { useState, useEffect } from "react";
import { Column, Flex, Text } from "@/once-ui/components";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const [activeSection, setActiveSection] = useState("");

  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-100px 0px -30% 0px",
      threshold: [0, 0.25],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    structure.filter((section) => section.display).forEach((section) => {
      const element = document.getElementById(section.title);
      if (element) observer.observe(element);

      section.items.forEach((item) => {
        const subElement = document.getElementById(item);
        if (subElement) observer.observe(subElement);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [structure]);

  if (!about.tableOfContent.display) return null;

  return (
    <div className={styles.tocContainer}>
      <Column
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        position="fixed"
        right="40" // Increased from 24 to 40 to move it further right
        gap="12" // Reduced from 16 to 12 to make it more compact
        hide="m"
        className={styles.toc}
      >
        {structure
          .filter((section) => section.display)
          .map((section, sectionIndex) => (
            <Column key={sectionIndex} gap="6"> {/* Reduced from 8 to 6 */}
              <Flex
                cursor="interactive"
                className={`${styles.tocLink} ${activeSection === section.title ? styles.active : ""}`}
                gap="10" // Reduced from 12 to 10
                vertical="center"
                onClick={() => scrollTo(section.title, 80)}
              >
                <Text 
                  weight={activeSection === section.title ? "bold" : "regular"}
                  size="s" // Added size constraint
                >
                  {section.title}
                </Text>
                <Flex
                  height="1"
                  minWidth={activeSection === section.title ? "20" : "12"} // Reduced widths
                  background={activeSection === section.title ? "brand-strong" : "neutral-strong"}
                  className={styles.tocLine}
                ></Flex>
              </Flex>

              {about.tableOfContent.subItems && section.items.length > 0 && (
                <div className={styles.subItemsContainer}>
                  {section.items.map((item, itemIndex) => (
                    <Flex
                      hide="l"
                      key={itemIndex}
                      className={`${styles.tocSubLink} ${activeSection === item ? styles.active : ""}`}
                      gap="12"
                      paddingRight="12"
                      paddingLeft="12"
                      vertical="center"
                      onClick={() => scrollTo(item, 80)}
                    >
                      <Text
                        size="xs"
                        weight={activeSection === item ? "bold" : "regular"}
                        onBackground={activeSection === item ? "brand-strong" : "neutral-weak"}
                      >
                        {item}
                      </Text>
                      <Flex
                        height="1"
                        minWidth={activeSection === item ? "12" : "8"}
                        background={activeSection === item ? "brand-strong" : "neutral-strong"}
                        className={styles.tocLine}
                      ></Flex>
                    </Flex>
                  ))}
                </div>
              )}
            </Column>
          ))}

        <div className={styles.mobileMenuButton}>
          <Flex
            className={styles.tocMobileToggle}
            vertical="center"
            horizontal="center"
            onClick={() => document.body.classList.toggle("toc-mobile-expanded")}
          >
            <Text>Contents</Text>
          </Flex>
        </div>
      </Column>
    </div>
  );
};

export default TableOfContents;
