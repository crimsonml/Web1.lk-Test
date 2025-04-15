import React from "react";

import { 
  Heading, 
  Flex, 
  Text, 
  Button, 
  Avatar, 
  RevealFx, 
  Card, 
  Icon, 
  Grid, 
  Column, 
  Scroller,
  SmartLink,
  Badge
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { ServiceCard } from "@/components/services/ServiceCard";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: person.name,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            logo: {
              "@type": "ImageObject",
              url: `${baseURL}${person.avatar}`,
            },
          }),
        }}
      />
      {/* Hero Section - Modern Professional Redesign */}
      <Flex 
        fillWidth 
        style={{ 
          position: "relative",
          overflow: "hidden",
          marginTop: "var(--spacing-xl)",
          marginBottom: "var(--spacing-xxl)",
          borderRadius: "24px",
          border: "1px solid var(--color-neutral-weak)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
        }}
      >
        {/* Clean background with subtle pattern */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(43, 58, 103, 0.03) 0%, rgba(58, 180, 242, 0.03) 100%)",
          zIndex: -2,
        }}></div>
        
        {/* Refined dot pattern overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(#3AB4F2 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.03,
          zIndex: -1,
        }}></div>
        
        {/* Elegant border accent */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #2B3A67, #3AB4F2)",
          zIndex: 1,
        }}></div>
        
        <Flex 
          direction="column"
          gap="xl"
          paddingY="xxl"
          paddingX={{ base: "xl", tablet: "xxl" }}
          fillWidth
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Flex
            direction="column"
            gap="l"
            style={{ 
              maxWidth: "900px", 
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {/* Company name with special effect */}
            <RevealFx translateY="4">
              <Flex horizontal="center" vertical="center" gap="s">
                <Text 
                  variant="label-strong-l" 
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                    letterSpacing: "0.05em",
                    color: "#3AB4F2",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    padding: "8px 16px",
                    border: "2px solid rgba(58, 180, 242, 0.3)",
                    borderRadius: "12px",
                    background: "rgba(58, 180, 242, 0.05)",
                    boxShadow: "0 4px 16px rgba(58, 180, 242, 0.15)",
                    animation: "pulse 2s infinite alternate",
                  }}
                >
                  Web1.LK
                </Text>
              </Flex>
            </RevealFx>
            
            {/* Main headline with enhanced typography */}
            <RevealFx translateY="4" delay={0.1}>
              <Heading 
                wrap="balance" 
                variant="display-strong-l" 
                style={{
                  fontSize: "clamp(2.75rem, 6vw, 4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(90deg, #2B3A67, #3AB4F2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  padding: "0.15em 0",
                  fontWeight: 800,
                  textShadow: "0 8px 24px rgba(0,0,0,0.05)",
                }}
              >
                Transforming Businesses with Web Solutions
              </Heading>
            </RevealFx>
            
            {/* Refined subheading with clearer typography */}
            <RevealFx translateY="4" delay={0.2}>
              <Text 
                wrap="balance" 
                variant="heading-default-l"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-medium)",
                  maxWidth: "800px",
                  margin: "0 auto",
                  paddingTop: "8px",
                }}
              >
                A premier provider of{" "}
                <span style={{ 
                  position: "relative", 
                  fontWeight: 700, 
                  color: "var(--color-neutral-strong)"
                }}>
                  enterprise-grade
                  <span style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "2px",
                    height: "8px",
                    background: "rgba(58, 180, 242, 0.15)",
                    zIndex: -1,
                    borderRadius: "4px",
                  }}></span>
                </span>{" "}
                web solutions for sustainable business growth through digital transformation.
              </Text>
            </RevealFx>
  
            {/* Enhanced CTA button with cleaner styling */}
            <RevealFx translateY="4" delay={0.3}>
              <Flex horizontal="center" marginTop="l" marginBottom="m">
                <Button
                  id="consultation"
                  data-border="rounded"
                  href={home.cta.link}
                  variant="primary"
                  size="l"
                  arrowIcon
                  style={{
                    background: "linear-gradient(90deg, #2B3A67, #3AB4F2)",
                    border: "none",
                    padding: "16px 36px",
                    borderRadius: "16px",
                    boxShadow: "0 12px 28px rgba(58, 180, 242, 0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                  data-hover-transform="translateY(-2px)"
                  data-hover-shadow="0 16px 32px rgba(58, 180, 242, 0.3)"
                >
                  {home.cta.label}
                </Button>
              </Flex>
            </RevealFx>
          </Flex>
          
          {/* Service icons with proper spacing and positioning */}
          <RevealFx translateY="4" delay={0.4}>
            <Flex horizontal="center" marginTop="extraSmall">
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(36px, 6vw, 80px)",
                width: "100%",
                maxWidth: "800px",
                position: "relative",
                padding: "0 20px 20px",
              }}>
                {[
                  { bg: "#2B3A67", icon: "code", label: "Web Apps" },
                  { bg: "linear-gradient(90deg, #2B3A67, #3AB4F2)", icon: "shoppingCart", label: "POS Systems" },
                  { bg: "#3AB4F2", icon: "cloud", label: "SaaS Solutions" },
                ].map((item, i) => (
                  <Flex key={i} direction="column" horizontal="center" gap="s">
                    <div style={{
                      width: "clamp(70px, 8vw, 90px)",
                      height: "clamp(70px, 8vw, 90px)",
                      borderRadius: "24px",
                      background: item.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transform: "rotate(0deg)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      position: "relative",
                      margin: "15px",
                    }}>
                      <Icon 
                        name={item.icon}
                        size="l" 
                        onBackground="surface-strong"
                        style={{ 
                          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))",
                          transform: "scale(1.2)",
                        }}
                      />
                    </div>
                    <Text 
                      variant="label-strong-s" 
                      onBackground="neutral-medium" 
                      style={{ 
                        opacity: 0.8,
                      }}
                    >
                      {item.label}
                    </Text>
                  </Flex>
                ))}
              </div>
            </Flex>
          </RevealFx>
        </Flex>
      </Flex>

      {/* Services Section */}
      <RevealFx translateY="12" delay={0.2}>
        <Flex 
          fillWidth 
          direction="column"
          radius="xl"
          background="surface" 
          border="neutral-weak"
          shadow="m"
          style={{ 
            marginTop: "var(--spacing-xl)",
            marginBottom: "var(--spacing-xl)",
            overflow: "hidden",
            position: "relative"
          }}
        >
          {/* Background accent element */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "8px",
            background: "linear-gradient(90deg, var(--color-brand-medium) 0%, var(--color-accent-medium) 100%)",
            zIndex: 1
          }}></div>
          
          {/* Services Header - Centered & Symmetrical */}
          <Flex 
            direction="column" 
            horizontal="center" 
            align="center" 
            paddingTop="xl"
            paddingBottom="m"
            paddingX="xl"
            fillWidth
            style={{ 
              background: "var(--color-surface-strong)",
              borderBottom: "1px solid var(--color-neutral-weak)"
            }}
          >
            <Text 
              variant="label-strong-s" 
              onBackground="brand-medium" 
              marginBottom="s"
              style={{ letterSpacing: "0.1em" }}
            >
              WHAT WE OFFER
            </Text>
            <Heading 
              as="h2" 
              variant="display-strong-s" 
              paddingBottom="m" 
              align="center"
              style={{ position: "relative" }}
            >
              Our Services
              <div style={{ 
                position: "absolute", 
                bottom: "0", 
                left: "50%", 
                transform: "translateX(-50%)",
                width: "60px", 
                height: "3px", 
                background: "var(--color-brand-medium)" 
              }}></div>
            </Heading>
            <Text 
              variant="body-default-m" 
              onBackground="neutral-medium" 
              align="center"
              style={{ maxWidth: "600px" }}
            >
              Customized technology solutions designed specifically for your industry and business needs
            </Text>
          </Flex>
        
          {/* Services Cards - Connected with heading */}
          <Flex 
            fillWidth 
            direction="column" 
            align="center"
            paddingY="l"
            paddingX="m"
            background="surface-weak"
          >
            <Grid 
              columns="2" 
              tabletColumns="2" 
              mobileColumns="1" 
              gap="24" 
              style={{ 
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto"
              }}
            >
              {home.services.map((service, index) => (
                <RevealFx key={service.title} translateY="8" delay={0.2 + index * 0.1}>
                  <ServiceCard service={service} />
                </RevealFx>
              ))}
            </Grid>
          </Flex>
        </Flex>
      </RevealFx>

      {/* USP Section - moved below Services Section */}
      <RevealFx translateY="16" delay={0.6}>
        <Flex fillWidth paddingY="l" radius="m" background="surface" border="neutral-medium" horizontal="center">
          <Flex direction="column" gap="4" align="center">
            <Heading 
              as="h2" 
              variant="display-strong-s" 
              onBackground="brand-strong" 
              paddingBottom="2"
              align="center"
            >
              <Text as="span" variant="display-strong-s" onBackground="neutral-strong">Enterprise</Text>
              <Text as="span" variant="display-default-s" onBackground="brand-medium">-caliber</Text>
              <Text as="span"> solutions </Text>
              <Text as="span" variant="display-strong-s" onBackground="accent-strong">for digital growth</Text>
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-medium" align="center" style={{ maxWidth: "600px" }}>
              Building remarkable web experiences that drive business success
            </Text>
          </Flex>
        </Flex>
      </RevealFx>
      
      {/* Case Studies Section - Redesigned for a cleaner, more professional look */}
      <RevealFx translateY="12" delay={0.2}>
        <Flex 
          fillWidth 
          direction="column"
          radius="xl"
          background="surface" 
          border="neutral-weak"
          shadow="m"
          style={{ 
            marginTop: "var(--spacing-xl)",
            marginBottom: "var(--spacing-xl)",
            overflow: "hidden",
            position: "relative",
            borderRadius: "24px",
          }}
        >
          {/* Refined header section with improved typography */}
          <Flex 
            direction="column" 
            horizontal="center" 
            align="center" 
            paddingTop="xl"
            paddingBottom="l"
            paddingX="xl"
            fillWidth
            style={{ 
              background: "var(--color-surface)",
              borderBottom: "1px solid var(--color-neutral-weak)",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
            }}
          >
            <Text 
              variant="label-strong-s" 
              onBackground="brand-medium" 
              marginBottom="s"
              style={{ 
                letterSpacing: "0.12em", 
                transform: "translateY(0)",
              }}
            >
              CLIENT SUCCESS STORIES
            </Text>
            <Heading 
              as="h2" 
              variant="display-strong-s" 
              paddingBottom="m" 
              align="center"
              style={{ 
                position: "relative",
                color: "var(--color-neutral-strong)",
              }}
            >
              Featured Case Studies
              <div style={{ 
                position: "absolute", 
                bottom: "0", 
                left: "50%", 
                transform: "translateX(-50%)",
                width: "60px", 
                height: "3px", 
                background: "linear-gradient(90deg, #3AB4F2, #2B3A67)",
              }}></div>
            </Heading>
            <Text 
              variant="body-default-m" 
              onBackground="neutral-medium" 
              align="center"
              style={{ 
                maxWidth: "600px",
              }}
            >
              Real solutions driving measurable business results for our clients
            </Text>
          </Flex>
        
          {/* Case Studies Cards - Completely redesigned for symmetry and professionalism */}
          <Flex 
            fillWidth 
            direction="column" 
            align="center"
            paddingY="xl"
            paddingX={{ base: "m", tablet: "l" }}
            background="surface-weak"
            style={{
              borderBottomLeftRadius: "24px",
              borderBottomRightRadius: "24px",
              backgroundImage: "radial-gradient(circle at top right, rgba(59, 180, 242, 0.03), transparent 70%)",
            }}
          >
            <Grid 
              columns="2" 
              tabletColumns="2" 
              mobileColumns="1" 
              gap="32" 
              style={{ 
                width: "100%",
                maxWidth: "960px",
                margin: "0 auto"
              }}
            >
              {home.caseStudies.map((caseStudy, index) => (
                <RevealFx key={caseStudy.title} translateY="8" delay={0.2 + index * 0.1}>
                  <SmartLink href={caseStudy.link} unstyled>
                    <Card
                      shadow="m"
                      style={{
                        transition: "all 0.4s ease",
                        cursor: "pointer",
                        overflow: "hidden",
                        height: "100%",
                        borderRadius: "16px",
                        transform: "translateY(0)",
                        border: "1px solid var(--color-neutral-weak)",
                      }}
                      data-hover-shadow="xl"
                      data-hover-border="brand-medium"
                      data-hover-transform="translateY(-8px)"
                    >
                      {caseStudy.image && (
                        <div style={{
                          position: "relative",
                          overflow: "hidden",
                          borderTopLeftRadius: "16px",
                          borderTopRightRadius: "16px",
                        }}>
                          {/* Image with overlay gradient for text readability */}
                          <div style={{
                            backgroundImage: `url(${caseStudy.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '220px',
                            transition: 'transform 0.6s ease',
                            transformOrigin: 'center',
                          }}/>
                          
                          {/* Refined gradient overlay */}
                          <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                            opacity: 0.8,
                          }}/>
                          
                          {/* Client badge with refined styling */}
                          <div style={{
                            position: "absolute",
                            top: "16px",
                            left: "16px",
                            background: "#2B3A67",
                            padding: "6px 14px",
                            borderRadius: "20px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          }}>
                            <Text variant="label-strong-s" onBackground="surface-strong">
                              {caseStudy.client}
                            </Text>
                          </div>
                          
                          {/* Title positioned over image for better space usage */}
                          <div style={{
                            position: "absolute",
                            bottom: "16px",
                            left: "16px",
                            right: "16px",
                          }}>
                            <Text 
                              variant="heading-strong-m"
                              style={{ 
                                color: "white",
                                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                              }}
                            >
                              {caseStudy.title}
                            </Text>
                          </div>
                        </div>
                      )}
                      
                      <Flex direction="column" gap="16" padding="l">
                        {/* Description with refined typography */}
                        <Text 
                          variant="body-default-m" 
                          wrap="balance" 
                          style={{
                            lineHeight: 1.6,
                            color: "var(--color-neutral-strong)",
                          }}
                        >
                          {caseStudy.description.split('resulting in').shift()}
                        </Text>
                        
                        {/* Results section with structured layout */}
                        <Flex direction="column" gap="12">
                          <Text 
                            variant="label-strong-s" 
                            onBackground="brand-strong"
                            style={{
                              marginBottom: "4px",
                              paddingBottom: "4px",
                              borderBottom: "1px solid var(--color-neutral-weak)",
                            }}
                          >
                            RESULTS
                          </Text>
                          
                          {/* Symmetrical metrics layout */}
                          <Flex gap="16" wrap>
                            {caseStudy.description.match(/\d+%/g)?.map((metric, i) => {
                              // Extract the result description
                              const resultText = caseStudy.description.split(/\d+%/).filter(Boolean)[i];
                              
                              return (
                                <Flex 
                                  key={i} 
                                  direction="column" 
                                  gap="4"
                                  style={{
                                    flex: "1 0 calc(50% - 8px)",
                                    minWidth: "120px",
                                  }}
                                >
                                  {/* Metric with accent styling */}
                                  <Text 
                                    variant="heading-strong-l" 
                                    onBackground="accent-strong"
                                    style={{ 
                                      fontSize: "28px",
                                      background: "linear-gradient(135deg, #3AB4F2, #2B3A67)",
                                      WebkitBackgroundClip: "text",
                                      WebkitTextFillColor: "transparent",
                                    }}
                                  >
                                    {metric}
                                  </Text>
                                  
                                  {/* Metric description with clean typography */}
                                  <Text 
                                    variant="body-default-s" 
                                    onBackground="neutral-strong"
                                    style={{ lineHeight: 1.4 }}
                                  >
                                    {resultText.replace(/^[,\s]+|[,\s]+$/g, '')}
                                  </Text>
                                </Flex>
                              );
                            })}
                          </Flex>
                        </Flex>
                        
                        {/* View case study link with subtle animation */}
                        <Flex 
                          horizontal="end" 
                          style={{ 
                            marginTop: "8px",
                            alignItems: "center",
                          }}
                        >
                          <Text 
                            variant="label-strong-s" 
                            onBackground="brand-medium"
                            style={{ marginRight: "8px" }}
                          >
                            View Case Study
                          </Text>
                          <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "var(--color-brand-alpha-weak)",
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            transition: "transform 0.3s ease",
                          }}>
                            <Icon 
                              name="arrowRight" 
                              size="s" 
                              onBackground="brand-medium"
                            />
                          </div>
                        </Flex>
                      </Flex>
                    </Card>
                  </SmartLink>
                </RevealFx>
              ))}
            </Grid>
            
            {/* "View all case studies" button with improved styling */}
            <Button
              variant="secondary"
              size="m"
              href="/portfolio"
              suffixIcon="arrowRight"
              style={{
                marginTop: "32px",
                borderRadius: "8px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-brand-alpha-medium)",
              }}
            >
              View all case studies
            </Button>
          </Flex>
        </Flex>
      </RevealFx>

      {/* Trusted By Section - Refined & Elegant Design */}
      <RevealFx translateY="12" delay={0.2}>
        <Flex 
          fillWidth 
          direction="column"
          radius="xl"
          background="surface" 
          border="neutral-weak"
          shadow="m"
          style={{ 
            marginTop: "var(--spacing-xl)",
            marginBottom: "var(--spacing-xl)",
            overflow: "hidden",
            position: "relative",
            borderRadius: "16px", /* More subtle rounded corners */
          }}
        >
          {/* Accent line with subtle gradient */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px", /* Thinner, more elegant accent bar */
            background: "linear-gradient(90deg, var(--color-brand-medium) 0%, var(--color-accent-medium) 100%)",
            zIndex: 1,
          }}></div>
          
          {/* Trusted By Header - Refined */}
          <Flex 
            direction="column" 
            horizontal="center" 
            align="center" 
            paddingTop="xl"
            paddingBottom="m"
            paddingX="xl"
            fillWidth
            style={{ 
              borderBottom: "1px solid var(--color-neutral-weak)",
            }}
          >
            <Text 
              variant="label-strong-s" 
              onBackground="brand-medium" 
              marginBottom="s"
              style={{ letterSpacing: "0.05em" }}
            >
              TRUSTED BY INDUSTRY LEADERS
            </Text>
            <Heading 
              as="h2" 
              variant="display-strong-s" 
              paddingBottom="m" 
              align="center"
              style={{ position: "relative" }}
            >
              Our Clients
              <div style={{ 
                position: "absolute", 
                bottom: "0", 
                left: "50%", 
                transform: "translateX(-50%)",
                width: "40px", 
                height: "2px", 
                background: "var(--color-brand-medium)",
              }}></div>
            </Heading>
            <Text 
              variant="body-default-m" 
              onBackground="neutral-medium" 
              align="center"
              style={{ maxWidth: "600px" }}
            >
              Partnering with forward-thinking organizations to deliver exceptional digital experiences
            </Text>
          </Flex>
        
          {/* Client Logos - Clean & Minimal Design */}
          <Flex 
            fillWidth 
            direction="column" 
            align="center"
            paddingY="xl"
            paddingX="xl"
            background="surface-weak"
          >
            <Grid 
              columns="4" 
              tabletColumns="2" 
              mobileColumns="2" 
              gap="40" 
              style={{ 
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto"
              }}
            >
              {/* Client logo cards - simplified and elegant */}
              {[
                { name: "TechCorp", industry: "Technology", icon: "code" },
                { name: "FinanceHub", industry: "Finance", icon: "shoppingCart" },
                { name: "HealthPlus", industry: "Healthcare", icon: "globe" },
                { name: "RetailGo", industry: "E-commerce", icon: "connection" }
              ].map((client, index) => (
                <RevealFx key={client.name} translateY="8" delay={0.2 + index * 0.1}>
                  <Card
                    shadow="s"
                    style={{
                      transition: "all 0.3s ease",
                      overflow: "hidden",
                      aspectRatio: "1/1",
                      width: "100%",
                      borderRadius: "12px",
                      transform: "translateY(0)",
                      border: "1px solid var(--color-neutral-alpha-weak)",
                    }}
                    data-hover-shadow="m"
                    data-hover-border="brand-alpha-medium"
                    data-hover-transform="translateY(-4px)"
                  >
                    <Flex
                      fillWidth
                      fillHeight
                      direction="column"
                      vertical="center"
                      horizontal="center"
                      style={{
                        padding: "24px 16px",
                        position: "relative",
                      }}
                    >
                      {/* Client icon in elegant circle */}
                      <Flex
                        width="64"
                        height="64"
                        radius="full"
                        background="brand-alpha-weak" 
                        vertical="center"
                        horizontal="center"
                        marginBottom="16"
                        style={{
                          border: "1px solid var(--color-brand-alpha-medium)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                        }}
                      >
                        <Icon
                          name={client.icon}
                          size="l"
                          onBackground="brand-strong"
                        />
                      </Flex>
                      
                      {/* Client name - clean typography */}
                      <Text 
                        variant="heading-strong-s"
                        marginBottom="8"
                        align="center"
                        style={{
                          color: "var(--color-brand-strong)",
                        }}
                      >
                        {client.name}
                      </Text>
                      
                      {/* Industry tag - subtle styling */}
                      <Badge
                        variant="neutral"
                        size="s"
                        style={{
                          borderRadius: "12px",
                          padding: "4px 12px",
                          background: "var(--color-neutral-alpha-weak)",
                          border: "1px solid var(--color-neutral-alpha-medium)",
                        }}
                      >
                        {client.industry}
                      </Badge>
                    </Flex>
                  </Card>
                </RevealFx>
              ))}
            </Grid>
            
            {/* View all clients button */}
            <Flex marginTop="xl">
              <Button
                variant="secondary"
                size="m"
                href="/about#our-clients"
                suffixIcon="arrowRight"
                style={{
                  borderRadius: "8px",
                }}
              >
                View all clients
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </RevealFx>

      {/* Client Testimonials Section - Mobile-optimized */}
      <RevealFx translateY="12" delay={0.2}>
        <Flex 
          fillWidth 
          direction="column"
          radius="xl"
          background="surface" 
          border="neutral-weak"
          shadow="m"
          style={{ 
            marginTop: "var(--spacing-xl)",
            marginBottom: "var(--spacing-xl)",
            overflow: "hidden",
            position: "relative",
            borderRadius: "20px",
          }}
        >
          {/* Testimonials Header - Clean & Consistent with other sections */}
          <Flex 
            direction="column" 
            horizontal="center" 
            align="center" 
            paddingTop="xl"
            paddingBottom="l"
            paddingX={{ base: "m", tablet: "xl" }}
            fillWidth
            style={{ 
              background: "var(--color-surface)",
              borderBottom: "1px solid var(--color-neutral-weak)",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Text 
              variant="label-strong-s" 
              onBackground="brand-medium" 
              marginBottom="s"
              style={{ 
                letterSpacing: "0.1em",
              }}
            >
              CUSTOMER FEEDBACK
            </Text>
            <Heading 
              as="h2" 
              variant="display-strong-s" 
              paddingBottom="m" 
              align="center"
              style={{ 
                position: "relative",
                color: "var(--color-neutral-strong)",
              }}
            >
              Client Testimonials
              <div style={{ 
                position: "absolute", 
                bottom: "0", 
                left: "50%", 
                transform: "translateX(-50%)",
                width: "60px", 
                height: "3px", 
                background: "linear-gradient(90deg, #3AB4F2, #2B3A67)",
              }}></div>
            </Heading>
            <Text 
              variant="body-default-m" 
              onBackground="neutral-medium" 
              align="center"
              style={{ 
                maxWidth: "600px",
              }}
            >
              Hear what our clients have to say about working with us
            </Text>
          </Flex>
        
          {/* Mobile-optimized Testimonials Content */}
          <Flex 
            fillWidth 
            direction="column" 
            align="center"
            paddingY="xl"
            paddingX={{ base: "m", tablet: "l" }}
            background="surface"
            style={{
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            {/* Desktop view uses horizontal scrolling, mobile uses vertical stacking */}
            <div style={{
              width: "100%",
              maxWidth: "1000px",
              padding: "8px 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              gap: "24px",
              margin: "0 auto",
            }}>
              {home.testimonials.map((testimonial, index) => (
                <RevealFx key={index} translateY="8" delay={0.2 + index * 0.1}>
                  <Card 
                    shadow="none"
                    style={{
                      transition: "all 0.3s ease",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                      border: "1px solid var(--color-neutral-weak)",
                      background: "var(--color-surface-weak)",
                    }}
                    data-hover-shadow="s"
                    data-hover-border="brand-alpha-medium"
                    data-hover-transform="translateY(-4px)"
                  >
                    <Flex 
                      direction="column" 
                      gap="20" 
                      padding="l"
                      fillHeight
                    >
                      {/* Simple quote icon */}
                      <Flex horizontal="start">
                        <Icon 
                          name="quote" 
                          size="m"
                          onBackground="brand-alpha-medium" 
                        />
                      </Flex>
                      
                      {/* Quote with clean typography */}
                      <Text 
                        variant="body-default-m" 
                        onBackground="neutral-strong"
                        style={{ 
                          lineHeight: 1.7,
                          flexGrow: 1,
                        }}
                      >
                        "{testimonial.quote}"
                      </Text>
                      
                      {/* Subtle separator line */}
                      <div style={{ 
                        width: "40px", 
                        height: "2px", 
                        background: "var(--color-neutral-weak)",
                        margin: "4px 0 16px 0",
                      }}></div>
                      
                      {/* Author info with elegant layout */}
                      <Flex gap="12" vertical="center">
                        <Avatar 
                          src={testimonial.image} 
                          size="m"
                          style={{
                            border: "1px solid var(--color-neutral-weak)",
                          }}
                        />
                        <Flex direction="column" gap="2">
                          <Text 
                            variant="label-strong-m"
                            style={{
                              color: "#2B3A67",
                              fontWeight: "600",
                            }}
                          >
                            {testimonial.author}
                          </Text>
                          <Text 
                            variant="body-default-s" 
                            onBackground="neutral-medium"
                          >
                            {testimonial.position}
                            {testimonial.company && `, ${testimonial.company}`}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Card>
                </RevealFx>
              ))}
            </div>

            {/* View all testimonials button */}
            <Button
              variant="secondary"
              size="m"
              href="/testimonials"
              suffixIcon="arrowRight"
              style={{
                marginTop: "24px",
                borderRadius: "8px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-brand-alpha-medium)",
              }}
            >
              View all testimonials
            </Button>
          </Flex>
        </Flex>
      </RevealFx>

      {/* End of content */}
    </Column>
  );
}
