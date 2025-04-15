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
            <Flex horizontal="center" marginTop="xl">
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

      {/* USP Section */}
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
      
      {/* Case Studies Section */}
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
            borderRadius: "24px", /* Ensuring consistent rounding */
          }}
        >
          {/* Background accent element with animation */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "8px",
            background: "linear-gradient(90deg, var(--color-accent-medium) 0%, var(--color-brand-medium) 100%)",
            zIndex: 1,
            animation: "pulse 3s infinite alternate",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
          }}></div>
          
          {/* Case Studies Header */}
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
              borderBottom: "1px solid var(--color-neutral-weak)",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
            }}
          >
            <Text 
              variant="label-strong-s" 
              onBackground="accent-medium" 
              marginBottom="s"
              style={{ letterSpacing: "0.1em", animation: "fadeInUp 0.8s ease-out" }}
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
                animation: "fadeInUp 0.8s ease-out 0.2s both"
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
                background: "var(--color-accent-medium)",
                animation: "float 4s ease-in-out infinite"
              }}></div>
            </Heading>
            <Text 
              variant="body-default-m" 
              onBackground="neutral-medium" 
              align="center"
              style={{ 
                maxWidth: "600px",
                animation: "fadeInUp 0.8s ease-out 0.4s both"
              }}
            >
              Real-world solutions delivering measurable business results for our clients
            </Text>
          </Flex>
        
          {/* Case Studies Cards */}
          <Flex 
            fillWidth 
            direction="column" 
            align="center"
            paddingY="xl"
            paddingX="m"
            background="surface-weak"
            style={{
              borderBottomLeftRadius: "24px",
              borderBottomRightRadius: "24px",
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
                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        cursor: "pointer",
                        overflow: "hidden",
                        height: "100%",
                        borderRadius: "24px", /* Increased border radius for more rounded edges */
                        transform: "translateY(0)",
                      }}
                      data-hover-shadow="xl"
                      data-hover-border="brand-medium"
                      data-hover-transform="translateY(-8px)"
                    >
                      {caseStudy.image && (
                        <div style={{
                          position: "relative",
                          overflow: "hidden",
                          borderTopLeftRadius: "24px", /* Consistent rounding with card */
                          borderTopRightRadius: "24px", /* Consistent rounding with card */
                        }}>
                          <div 
                            className="case-study-image"
                            style={{
                              backgroundImage: `url(${caseStudy.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              width: '100%',
                              height: '260px',
                              transition: 'transform 0.8s ease',
                              transformOrigin: 'center',
                              borderTopLeftRadius: "24px", /* Consistent rounding with card */
                              borderTopRightRadius: "24px", /* Consistent rounding with card */
                              filter: "brightness(1)",
                            }}
                          />
                          
                          {/* Gradient overlay */}
                          <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
                            borderTopLeftRadius: "24px", /* Consistent rounding with card */
                            borderTopRightRadius: "24px", /* Consistent rounding with card */
                          }}/>
                          
                          {/* Client badge with rounded corners */}
                          <div 
                            className="client-badge"
                            style={{
                              position: "absolute",
                              top: "16px",
                              right: "16px",
                              background: "var(--color-brand-strong)",
                              padding: "8px 16px",
                              borderRadius: "30px", /* Very rounded pill shape */
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                              transform: "translateY(0)",
                              transition: "transform 0.3s ease",
                            }}
                          >
                            <Text variant="label-strong-s" onBackground="surface-strong">
                              {caseStudy.client}
                            </Text>
                          </div>
                        </div>
                      )}
                      
                      <Flex direction="column" gap="16" padding="l" style={{ borderRadius: "24px" }}>
                        <Flex horizontal="space-between" vertical="center" gap="8">
                          <Text 
                            variant="heading-strong-m" 
                            className="case-study-title"
                            style={{ 
                              color: "var(--color-brand-strong)",
                              transition: "color 0.3s ease",
                            }}
                          >
                            {caseStudy.title}
                          </Text>
                          <Icon 
                            name="arrowRight" 
                            size="s" 
                            onBackground="brand-medium" 
                            className="case-study-arrow"
                            style={{ 
                              transition: "transform 0.3s ease",
                              background: "var(--color-brand-alpha-weak)",
                              padding: "6px",
                              borderRadius: "50%", /* Fully rounded icon background */
                            }}
                          />
                        </Flex>

                        <Text variant="body-default-m" wrap="balance" marginBottom="s">
                          {caseStudy.description}
                        </Text>
                        
                        {/* Extract and highlight metrics from the description with nice rounded badges */}
                        <Flex wrap gap="12" marginTop="s">
                          {caseStudy.description.match(/\d+%/g)?.map((metric, i) => (
                            <Flex
                              key={i}
                              radius="xl"
                              padding="12"
                              background="accent-alpha-weak"
                              border="accent-alpha-medium"
                              vertical="center"
                              horizontal="center"
                              className="metric-badge"
                              style={{
                                minWidth: "70px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                                borderRadius: "40px", /* Extra rounded for metrics badges */
                              }}
                            >
                              <Text 
                                variant="label-strong-m" 
                                onBackground="accent-strong"
                                style={{ fontWeight: "700" }}
                              >
                                {metric}
                              </Text>
                            </Flex>
                          ))}
                        </Flex>
                      </Flex>
                    </Card>
                  </SmartLink>
                </RevealFx>
              ))}
            </Grid>
            
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

      {/* Client Testimonials Section - Redesigned */}
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
            borderRadius: "28px", /* Larger rounded corners throughout */
          }}
        >
          {/* Background accent element with animation */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "10px", /* Slightly thicker accent bar */
            background: "linear-gradient(90deg, var(--color-accent-medium) 0%, var(--color-brand-medium) 100%)",
            zIndex: 1,
            animation: "pulse 3s infinite alternate",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
          }}></div>
          
          {/* Testimonials Header */}
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
              borderBottom: "1px solid var(--color-neutral-weak)",
              borderTopLeftRadius: "28px",
              borderTopRightRadius: "28px",
            }}
          >
            <Text 
              variant="label-strong-s" 
              onBackground="accent-medium" 
              marginBottom="s"
              style={{ letterSpacing: "0.1em", animation: "fadeInUp 0.8s ease-out" }}
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
                animation: "fadeInUp 0.8s ease-out 0.2s both"
              }}
            >
              Client Testimonials
              <div style={{ 
                position: "absolute", 
                bottom: "0", 
                left: "50%", 
                transform: "translateX(-50%)",
                width: "80px", /* Slightly wider underline */
                height: "4px", /* Slightly thicker underline */
                background: "linear-gradient(90deg, var(--color-accent-medium) 0%, var(--color-brand-medium) 100%)",
                animation: "float 4s ease-in-out infinite",
                borderRadius: "2px", /* Rounded corners on the underline */
              }}></div>
            </Heading>
            <Text 
              variant="body-default-m" 
              onBackground="neutral-medium" 
              align="center"
              style={{ 
                maxWidth: "600px",
                animation: "fadeInUp 0.8s ease-out 0.4s both"
              }}
            >
              Hear what our clients have to say about their experience working with us
            </Text>
          </Flex>
        
          {/* Testimonials Cards */}
          <Flex 
            fillWidth 
            direction="column" 
            align="center"
            paddingY="xl"
            paddingX="l"
            background="surface-weak"
            style={{
              borderBottomLeftRadius: "28px",
              borderBottomRightRadius: "28px",
              background: "radial-gradient(circle at bottom left, var(--color-surface-weak) 0%, var(--color-surface) 100%)",
            }}
          >
            <Scroller 
              direction="row" 
              style={{ 
                padding: "16px 8px 32px 8px",
                marginLeft: "-8px",
                marginRight: "-8px",
                width: "calc(100% + 16px)"
              }}
            >
              {home.testimonials.map((testimonial, index) => (
                <RevealFx key={index} translateY="8" delay={0.2 + index * 0.1}>
                  <Card 
                    shadow="l"
                    style={{
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      overflow: "hidden",
                      minWidth: "340px",
                      maxWidth: "400px",
                      margin: "8px",
                      borderRadius: "28px",
                      transform: "translateY(0)",
                      border: "1px solid var(--color-neutral-weak)",
                      position: "relative",
                    }}
                    data-hover-shadow="xl"
                    data-hover-border="accent-medium"
                    data-hover-transform="translateY(-8px) scale(1.01)"
                  >
                    {/* Quote mark decorative element */}
                    <div style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      fontSize: "64px",
                      lineHeight: "1",
                      fontFamily: "Georgia, serif",
                      opacity: "0.1",
                      color: "var(--color-brand-strong)",
                      zIndex: 0,
                    }}>
                      "
                    </div>
                    
                    <Flex 
                      direction="column" 
                      gap="24" 
                      padding="l"
                      style={{
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {/* Rating stars if available */}
                      <Flex gap="4" style={{ marginBottom: "8px" }}>
                        {Array(5).fill(0).map((_, i) => (
                          <Icon 
                            key={i}
                            name="star" 
                            size="s"
                            onBackground="accent-medium"
                            style={{
                              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                            }}
                          />
                        ))}
                      </Flex>
                      
                      {/* The quote itself */}
                      <Text 
                        variant="body-strong-m" 
                        onBackground="neutral-strong"
                        style={{ 
                          fontStyle: "italic",
                          position: "relative",
                          lineHeight: "1.6",
                        }}
                      >
                        "{testimonial.quote}"
                      </Text>
                      
                      {/* Separator line */}
                      <div style={{ 
                        width: "40%", 
                        height: "2px", 
                        background: "linear-gradient(90deg, var(--color-accent-medium) 0%, transparent 100%)",
                        borderRadius: "1px",
                        marginTop: "8px",
                        marginBottom: "8px",
                      }}></div>
                      
                      {/* Author info with enhanced avatar */}
                      <Flex gap="16" vertical="center">
                        <div style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "32px",
                          overflow: "hidden",
                          border: "3px solid var(--color-brand-alpha-medium)",
                          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                        }}>
                          <Avatar 
                            src={testimonial.image} 
                            size="l"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <Flex direction="column">
                          <Text 
                            variant="label-strong-m"
                            style={{
                              background: "linear-gradient(90deg, var(--color-brand-strong) 0%, var(--color-accent-strong) 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                            }}
                          >
                            {testimonial.author}
                          </Text>
                          <Text variant="body-default-s" onBackground="neutral-medium">
                            <span style={{ fontWeight: "600" }}>{testimonial.position}</span>
                            {testimonial.company && (
                              <>, <span style={{ fontStyle: "italic" }}>{testimonial.company}</span></>
                            )}
                          </Text>
                          
                          {/* Company logo or badge if available */}
                          {testimonial.company && (
                            <Badge
                              variant="neutral"
                              size="s"
                              style={{
                                marginTop: "8px",
                                borderRadius: "16px",
                                padding: "4px 12px",
                                display: "inline-flex",
                                maxWidth: "fit-content",
                              }}
                            >
                              {testimonial.company}
                            </Badge>
                          )}
                        </Flex>
                      </Flex>
                    </Flex>
                  </Card>
                </RevealFx>
              ))}
            </Scroller>
            
            {/* Navigation dots */}
            <Flex horizontal="center" gap="8" marginTop="m">
              {[...Array(Math.min(3, home.testimonials.length))].map((_, i) => (
                <div 
                  key={i} 
                  style={{
                    width: i === 0 ? "32px" : "12px",
                    height: "12px",
                    borderRadius: "6px",
                    background: i === 0 ? "var(--color-accent-medium)" : "var(--color-neutral-weak)",
                    transition: "all 0.3s ease",
                  }}
                ></div>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </RevealFx>

      {/* End of content */}
    </Column>
  );
}
