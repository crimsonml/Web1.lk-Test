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
  SmartLink 
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
            position: "relative"
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
              borderBottom: "1px solid var(--color-neutral-weak)"
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
                        borderRadius: "18px",
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
                          borderTopLeftRadius: "18px",
                          borderTopRightRadius: "18px",
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
                              borderTopLeftRadius: "18px",
                              borderTopRightRadius: "18px",
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
                            borderTopLeftRadius: "18px",
                            borderTopRightRadius: "18px",
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
                              borderRadius: "30px",
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
                      
                      <Flex direction="column" gap="16" padding="l">
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

      {/* Client Logos Section */}
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s" paddingBottom="m">
          Trusted By
        </Heading>
        <RevealFx translateY="8" delay={0.2}>
          <Flex 
            fillWidth 
            paddingY="l" 
            paddingX="m" 
            radius="m" 
            background="surface" 
            border="neutral-medium"
            gap="32"
            wrap
            horizontal="center"
          >
            {home.clients.map((client, index) => (
              <Flex 
                key={client.name} 
                width={120} 
                height={60}
                radius="m"
                vertical="center"
                horizontal="center"
              >
                {client.logo ? (
                  <img src={client.logo} alt={client.name} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                ) : (
                  <Text variant="heading-strong-m">{client.name}</Text>
                )}
              </Flex>
            ))}
          </Flex>
        </RevealFx>
      </Column>

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
