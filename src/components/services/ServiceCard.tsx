"use client"; // This marks the component as a client component

import React from "react";
import { 
  Card, 
  Flex, 
  Text, 
  Icon, 
  SmartLink 
} from "@/once-ui/components";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon, link } = service;
  
  return (
    <SmartLink href={link} unstyled>
      <Card
        shadow="m"
        padding="0"
        className="service-card"
        radius="xl"
        style={{
          transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
          overflow: "hidden",
          height: "100%",
          cursor: "pointer",
          position: "relative",
          margin: "0 auto",
          width: "100%",
          maxWidth: "340px"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-m)';
        }}
      >
        <Flex 
          direction="column" 
          padding="l"
          height="100%"
          gap="m"
          horizontal="center"
          align="center"
          style={{ 
            position: "relative",
            zIndex: 1,
            textAlign: "center"
          }}
        >
          <Flex 
            width="64" 
            height="64" 
            radius="full" 
            background="brand-weak" 
            vertical="center" 
            horizontal="center"
            marginBottom="m"
            style={{ 
              border: "2px solid var(--color-brand-weak)",
              boxShadow: "0 8px 16px rgba(0,0,0,0.06)"
            }}
          >
            <Icon name={icon} size="l" onBackground="brand-strong" />
          </Flex>
          <Text 
            variant="heading-strong-m" 
            marginBottom="s"
            style={{ 
              position: "relative",
              display: "inline-block" 
            }}
          >
            {title}
          </Text>
          <Text 
            variant="body-default-s" 
            wrap="balance" 
            onBackground="neutral-medium"
            marginBottom="m"
            style={{ maxWidth: "280px" }}
          >
            {description}
          </Text>
          <Flex 
            gap="8" 
            vertical="center"
            style={{ 
              transition: "transform 0.3s ease",
              transform: "translateX(0)"
            }}
            className="learn-more-link"
          >
            <Text variant="label-strong-s" onBackground="brand-medium">Learn more</Text>
            <Icon name="arrowRight" size="s" onBackground="brand-medium" />
          </Flex>
        </Flex>
      </Card>
    </SmartLink>
  );
};