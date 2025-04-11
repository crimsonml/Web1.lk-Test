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
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s" paddingBottom="m">
          Featured Case Studies
        </Heading>
        <Grid columns="2" tabletColumns="2" mobileColumns="1" gap="16">
          {home.caseStudies.map((caseStudy, index) => (
            <RevealFx key={caseStudy.title} translateY="8" delay={0.2 + index * 0.1}>
              <SmartLink href={caseStudy.link} unstyled>                <Card
                  shadow="l"
                >
                  {caseStudy.image && (
                    <div style={{
                      backgroundImage: `url(${caseStudy.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '100%',
                      height: '200px',
                      borderTopLeftRadius: 'var(--radius-s)',
                      borderTopRightRadius: 'var(--radius-s)'
                    }}/>
                  )}
                  <Flex direction="column" gap="8" padding="l">
                    <Text variant="heading-strong-m">{caseStudy.title}</Text>
                    <Text variant="label-strong-s" onBackground="brand-medium">
                      {caseStudy.client}
                    </Text>
                    <Text variant="body-default-m" wrap="balance">
                      {caseStudy.description}
                    </Text>
                  </Flex>
                </Card>
              </SmartLink>
            </RevealFx>
          ))}
        </Grid>
      </Column>

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
