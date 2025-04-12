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
      {/* Hero Section */}
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="consultation"
              data-border="rounded"
              href={home.cta.link}
              variant="primary"
              size="m"
              arrowIcon
            >
              {home.cta.label}
            </Button>
          </RevealFx>
        </Column>
      </Column>

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

      {/* Trusted By Section - Redesigned */}
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
            background: "linear-gradient(90deg, var(--color-brand-medium) 0%, var(--color-accent-medium) 100%)",
            zIndex: 1,
            animation: "pulse 3s infinite alternate",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
          }}></div>
          
          {/* Trusted By Header */}
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
              onBackground="brand-medium" 
              marginBottom="s"
              style={{ letterSpacing: "0.1em", animation: "fadeInUp 0.8s ease-out" }}
            >
              OUR VALUED CLIENTS
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
              Trusted By
              <div style={{ 
                position: "absolute", 
                bottom: "0", 
                left: "50%", 
                transform: "translateX(-50%)",
                width: "80px", /* Slightly wider underline */
                height: "4px", /* Slightly thicker underline */
                background: "linear-gradient(90deg, var(--color-brand-medium) 0%, var(--color-accent-medium) 100%)",
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
              Industry leaders who rely on our expertise to transform their digital presence
            </Text>
          </Flex>
        
          {/* Client Logos in 2x2 Grid */}
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
              background: "radial-gradient(circle at top right, var(--color-surface-weak) 0%, var(--color-surface) 100%)",
            }}
          >
            <Flex 
              direction="column"
              gap="40" /* Increased gap between rows */
              style={{ 
                width: "100%",
                maxWidth: "1000px", /* Slightly wider container */
                margin: "0 auto"
              }}
            >
              {/* First Row - 2 client logos */}
              <Flex horizontal="center" gap="40"> {/* Increased gap between columns */}
                {[
                  { name: "TechCorp", industry: "Technology", icon: "code" },
                  { name: "FinanceHub", industry: "Finance", icon: "shoppingCart" },
                ].map((client, index) => (
                  <RevealFx key={client.name} translateY="8" delay={0.2 + index * 0.1}>
                    <Card
                      shadow="l" /* Deeper shadow for more dimension */
                      style={{
                        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        overflow: "hidden",
                        width: "360px", /* Wider cards */
                        height: "240px", /* Taller cards */
                        borderRadius: "28px", 
                        transform: "translateY(0)",
                        border: "1px solid var(--color-neutral-weak)",
                      }}
                      data-hover-shadow="xl"
                      data-hover-border="brand-medium"
                      data-hover-transform="translateY(-8px) scale(1.02)" /* Add subtle scale effect on hover */
                    >
                      <Flex
                        direction="column"
                        fillWidth
                        fillHeight
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: "28px",
                        }}
                      >
                        {/* Client logo display area with gradient background */}
                        <Flex
                          fillWidth
                          fillHeight
                          vertical="center"
                          horizontal="center"
                          style={{
                            background: "linear-gradient(135deg, var(--color-brand-alpha-weak) 0%, var(--color-accent-alpha-weak) 100%)",
                            padding: "24px",
                            position: "relative",
                          }}
                        >
                          {/* Decorative background elements */}
                          <div style={{
                            position: "absolute",
                            top: "10%",
                            right: "10%",
                            width: "120px",
                            height: "120px",
                            borderRadius: "60px",
                            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                            opacity: 0.6,
                          }}></div>
                          <div style={{
                            position: "absolute",
                            bottom: "15%",
                            left: "10%",
                            width: "80px",
                            height: "80px",
                            borderRadius: "40px",
                            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                            opacity: 0.4,
                          }}></div>
                          
                          {/* Client logo and details */}
                          <Flex 
                            direction="column" 
                            vertical="center" 
                            horizontal="center" 
                            gap="16" /* Increased gap */
                          >
                            {/* Larger logo circle */}
                            <div className="client-logo" style={{
                              width: "140px", /* Bigger logo size */
                              height: "140px", /* Bigger logo size */
                              borderRadius: "70px", /* Fully rounded */
                              background: "var(--color-surface)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
                              border: "4px solid rgba(255,255,255,0.2)",
                              position: "relative",
                              overflow: "hidden",
                            }}>
                              {/* Logo shine effect */}
                              <div style={{
                                position: "absolute",
                                top: "-30%",
                                left: "-30%",
                                width: "160%",
                                height: "80%",
                                background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)",
                                transform: "rotate(-15deg)",
                              }}></div>
                              
                              <Flex gap="8" vertical="center" horizontal="center">
                                <Icon
                                  name={client.icon}
                                  size="xl"
                                  onBackground="brand-strong"
                                  style={{ 
                                    marginRight: "4px",
                                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                                  }}
                                />
                                <Text 
                                  variant="heading-strong-xl" 
                                  onBackground="brand-strong"
                                  style={{
                                    animation: "float 4s ease-in-out infinite",
                                    fontSize: "42px", /* Bigger text */
                                  }}
                                >
                                  {client.name.charAt(0)}
                                </Text>
                              </Flex>
                            </div>
                            
                            {/* Company name with enhanced styling */}
                            <Text 
                              variant="heading-strong-m"
                              style={{
                                background: "linear-gradient(90deg, var(--color-brand-strong) 0%, var(--color-accent-strong) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                fontSize: "1.3rem", /* Slightly bigger font */
                              }}
                            >
                              {client.name}
                            </Text>
                            
                            {/* Enhanced industry badge - bigger with more rounded corners */}
                            <Badge 
                              variant="accent" 
                              size="m"
                              icon={client.icon}
                              className="industry-badge"
                              style={{
                                borderRadius: "32px", /* Even more rounded corners */
                                padding: "10px 20px", /* More padding for bigger size */
                                cursor: "default",
                                transition: "none", /* Remove transition effects */
                                position: "relative",
                                overflow: "hidden",
                                background: "var(--color-accent-alpha-weak)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                border: "1px solid var(--color-accent-alpha-medium)",
                                fontSize: "1.1rem", /* Bigger text */
                              }}
                            >
                              {client.industry}
                            </Badge>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Card>
                  </RevealFx>
                ))}
              </Flex>

              {/* Second Row - 2 client logos */}
              <Flex horizontal="center" gap="40"> {/* Increased gap between columns */}
                {[
                  { name: "HealthPlus", industry: "Healthcare", icon: "globe" },
                  { name: "RetailGo", industry: "E-commerce", icon: "connection" },
                ].map((client, index) => (
                  <RevealFx key={client.name} translateY="8" delay={0.4 + index * 0.1}>
                    <Card
                      shadow="l"
                      style={{
                        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        overflow: "hidden",
                        width: "360px", /* Wider cards */
                        height: "240px", /* Taller cards */
                        borderRadius: "28px", 
                        transform: "translateY(0)",
                        border: "1px solid var(--color-neutral-weak)",
                      }}
                      data-hover-shadow="xl"
                      data-hover-border="accent-medium"
                      data-hover-transform="translateY(-8px) scale(1.02)" /* Add subtle scale effect on hover */
                    >
                      <Flex
                        direction="column"
                        fillWidth
                        fillHeight
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: "28px",
                        }}
                      >
                        {/* Client logo display area with gradient background */}
                        <Flex
                          fillWidth
                          fillHeight
                          vertical="center"
                          horizontal="center"
                          style={{
                            background: "linear-gradient(135deg, var(--color-accent-alpha-weak) 0%, var(--color-brand-alpha-weak) 100%)",
                            padding: "24px",
                            position: "relative",
                          }}
                        >
                          {/* Decorative background elements */}
                          <div style={{
                            position: "absolute",
                            top: "15%",
                            left: "10%",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50px",
                            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                            opacity: 0.6,
                          }}></div>
                          <div style={{
                            position: "absolute",
                            bottom: "10%",
                            right: "10%",
                            width: "60px",
                            height: "60px",
                            borderRadius: "30px",
                            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                            opacity: 0.4,
                          }}></div>
                          
                          {/* Client logo and details */}
                          <Flex 
                            direction="column" 
                            vertical="center" 
                            horizontal="center" 
                            gap="16" /* Increased gap */
                          >
                            {/* Larger logo circle */}
                            <div className="client-logo" style={{
                              width: "140px", /* Bigger logo size */
                              height: "140px", /* Bigger logo size */
                              borderRadius: "70px", /* Fully rounded */
                              background: "var(--color-surface)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
                              border: "4px solid rgba(255,255,255,0.2)",
                              position: "relative",
                              overflow: "hidden",
                            }}>
                              {/* Logo shine effect */}
                              <div style={{
                                position: "absolute",
                                top: "-30%",
                                left: "-30%",
                                width: "160%",
                                height: "80%",
                                background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)",
                                transform: "rotate(-15deg)",
                              }}></div>
                              
                              <Flex gap="8" vertical="center" horizontal="center">
                                <Icon
                                  name={client.icon}
                                  size="xl"
                                  onBackground="accent-strong"
                                  style={{ 
                                    marginRight: "4px",
                                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                                  }}
                                />
                                <Text 
                                  variant="heading-strong-xl" 
                                  onBackground="accent-strong"
                                  style={{
                                    animation: "float 4s ease-in-out infinite",
                                    fontSize: "42px", /* Bigger text */
                                  }}
                                >
                                  {client.name.charAt(0)}
                                </Text>
                              </Flex>
                            </div>
                            
                            {/* Company name with enhanced styling */}
                            <Text 
                              variant="heading-strong-m"
                              style={{
                                background: "linear-gradient(90deg, var(--color-accent-strong) 0%, var(--color-brand-strong) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                fontSize: "1.3rem", /* Slightly bigger font */
                              }}
                            >
                              {client.name}
                            </Text>
                            
                            {/* Enhanced industry badge - bigger with more rounded corners */}
                            <Badge 
                              variant="brand" 
                              size="m"
                              icon={client.icon}
                              className="industry-badge"
                              style={{
                                borderRadius: "32px", /* Even more rounded corners */
                                padding: "10px 20px", /* More padding for bigger size */
                                cursor: "default",
                                transition: "none", /* Remove transition effects */
                                position: "relative",
                                overflow: "hidden",
                                background: "var(--color-brand-alpha-weak)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                border: "1px solid var(--color-brand-alpha-medium)",
                                fontSize: "1.1rem", /* Bigger text */
                              }}
                            >
                              {client.industry}
                            </Badge>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Card>
                  </RevealFx>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </RevealFx>

      {/* Testimonials Section */}
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s" paddingBottom="m">
          Client Testimonials
        </Heading>
        <RevealFx translateY="8" delay={0.2}>
          <Scroller direction="row">
            {home.testimonials.map((testimonial, index) => (              <Card 
                key={index}
                padding="l" 
                shadow="l"
                minWidth={320}
                maxWidth={400}
              >
                <Flex direction="column" gap="16">
                  <Text 
                    variant="body-strong-m" 
                    onBackground="neutral-strong"
                    style={{ fontStyle: "italic" }}
                  >
                    "{testimonial.quote}"
                  </Text>
                  <Flex gap="12" vertical="center">
                    <Avatar 
                      src={testimonial.image} 
                      size="m" 
                    />
                    <Flex direction="column">
                      <Text variant="label-strong-s">{testimonial.author}</Text>
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {testimonial.position}, {testimonial.company}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Scroller>
        </RevealFx>
      </Column>

      {/* End of content */}
    </Column>
  );
}
