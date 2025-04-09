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
        <Flex fillWidth paddingY="l" radius="m" background="surface" border="neutral-medium">
          <Heading as="h2" variant="heading-strong-l" align="center">
            Enterprise-grade web solutions for growth
          </Heading>
        </Flex>
      </RevealFx>
      
      {/* Services Section */}
      <Column fillWidth gap="m">
        <RevealFx translateY="8" delay={0.2}>
          <Heading as="h2" variant="display-strong-s" paddingBottom="m">
            Our Services
          </Heading>
          <Grid columns="2" tabletColumns="2" mobileColumns="1" gap="16">
            {home.services.map((service, index) => (
              <RevealFx key={service.title} translateY="8" delay={0.2 + index * 0.1}>                <SmartLink href={service.link} unstyled>
                  <Card
                    shadow="l"
                    padding="l"
                  >
                    <Flex direction="column" gap="12">
                      <Flex vertical="center" gap="8">
                        <Icon name={service.icon} size="l" onBackground="brand-medium" />
                        <Text variant="heading-strong-m">{service.title}</Text>
                      </Flex>
                      <Text variant="body-default-m" wrap="balance">
                        {service.description}
                      </Text>
                    </Flex>
                  </Card>
                </SmartLink>
              </RevealFx>
            ))}
          </Grid>
        </RevealFx>
      </Column>
      
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
